import { SheetsMethods } from "../../common/sheets";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const Sheets = new SheetsMethods();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      const { id } = req.query;
      if (!id) res.status(200).json({ data: await Sheets.findAll() });
      else res.status(200).json({ data: await Sheets.findById(id as string) });
      break;
    }
    case "PUT": {
      try {
        let newData = req.body;
        if (typeof newData === "string") newData = JSON.parse(newData);
        if (!newData?.id) throw new Error("No ID found in request");
        const result = await Sheets.updateRow(newData);
        if (!result) throw new Error(`Failed Updated for ID: ${newData.id}`);
        res.status(201).json({ message: `Successfully Updated for ID: ${newData.id}` });
      } catch (error) {
        console.log("handler ~ error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    }
    default: {
      res.status(405).json({ message: "Method not allowed" });
      break;
    }
  }
}
