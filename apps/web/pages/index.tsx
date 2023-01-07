// TODO: Make this code work by following the steps here: https://www.apollographql.com/docs/react/get-started
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { client } from "../src/apollo-client";
import { DocumentType, graphql } from "../__generated__/gql";

const GetSongDocument = graphql(`
  query GetSong {
    song(id: "song:1") {
      id
    }
  }
`);

export const getServerSideProps: GetServerSideProps<{
  data: DocumentType<typeof GetSongDocument>;
}> = async () => {
  const { data } = await client.query({
    query: GetSongDocument,
  });

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <main role="main">
        <h1>Spotify Clone</h1>
        <p>Song ID: {data.song?.id}</p>
      </main>
    </>
  );
}
