import { google } from "googleapis";

const target = ["https://www.googleapis.com/auth/spreadsheets"];
const jwt = new google.auth.JWT({
  email: process.env.NEXT_SERVER_GOOGLE_SHEETS_CLIENT_EMAIL,
  key: (process.env.NEXT_SERVER_GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  scopes: target,
});
const SheetsService = google.sheets({ version: "v4", auth: jwt });

const SheetTarget = {
  spreadsheetId: process.env.NEXT_SERVER_GOOGLE_SHEETS_SPREADSHEET_ID,
  range: process.env.NEXT_SERVER_GOOGLE_SHEETS_SHEET_NAME,
};

export interface Sheet {
  id?: any;
  fullName?: any;
  partyName?: any;
  accepted?: any;
  createdAt?: any;
  updatedAt?: any;
}

export class SheetsMethods {
  constructor() {}

  async findAll() {
    try {
      const response = await SheetsService.spreadsheets.values.get(SheetTarget);
      const resRows = response.data.values;
      if (resRows?.length) {
        return resRows.slice(1).map((row) => ({
          id: row[0],
          fullName: row?.[1],
          partyName: row?.[2],
          accepted: row?.[3],
          createdAt: row?.[4],
          updatedAt: row?.[5],
        }));
      }
    } catch (err) {
      console.log(err);
    }
    return [];
  }

  async findById(id: string) {
    const rows = await this.findAll();
    const foundItem = rows.find((item) => item?.id === id);
    return foundItem;
  }

  async updateRow(values: Sheet) {
    try {
      const rows = await this.findAll();
      const foundIndex = rows.findIndex((item) => item.id === values?.id);
      if (foundIndex === -1) throw new Error("No item found with ID: " + values?.id);
      const { id, fullName, partyName, accepted } = values;

      const result = await SheetsService.spreadsheets.values.update({
        ...SheetTarget,
        valueInputOption: "USER_ENTERED",
        range: `${SheetTarget.range}!C${foundIndex + 2}:D${foundIndex + 2}`,
        requestBody: { values: [[partyName, accepted]] },
      });
      return result;
    } catch (err) {
      console.log("updateRow ~ err:", err);
      throw err;
    }
  }
}
