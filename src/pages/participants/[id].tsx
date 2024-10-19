import { nextAPIUrl, fetchReq } from "@/common/request";
import { Sheet } from "@/common/sheets";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import useSWR, { SWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

const updateUser = (url: string, { arg }: { arg: Sheet }) => fetchReq(`${nextAPIUrl}${url}`, { method: "PUT", body: JSON.stringify(arg) });
const getUser = (url: string) => fetchReq<{ data: Sheet }>(`${nextAPIUrl}${url}`);

const Page = (props: { data: Sheet }) => {
  const { data: getUserRes } = useSWR(`/participants?id=${props.data.id}`, getUser);
  const UpdateUserReq = useSWRMutation(`/participants?id=${props.data.id}`, updateUser);

  return (
    <>
      <div className="">{JSON.stringify(getUserRes?.data || {})}</div>
      <button
        onClick={(e) => {
          UpdateUserReq.trigger({ ...props.data, accepted: "YES" });
        }}
      >
        Update
      </button>
    </>
  );
};

export const getStaticPaths = (async () => {
  return { paths: [], fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const sheetRow = await fetchReq<{ data: Sheet }>(`${nextAPIUrl}/participants?id=${params?.id}`);
  if (!sheetRow?.data) return { redirect: { destination: "/", permanent: false } };
  return { props: { data: sheetRow.data }, revalidate: 1 };
}) satisfies GetStaticProps<{ data: Sheet }>;

const PageWrapper = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback: { [`/participants?id=${data.id}`]: data } }}>
      <Page data={data} />
    </SWRConfig>
  );
};

export default PageWrapper;
