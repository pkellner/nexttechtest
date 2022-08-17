import React from "react";
import App from "../src/App";

function index({url}) {
  return <App url={url} />;
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps context:", context);

  return {
    props: {
      url: context.resolvedUrl,
    }, // will be passed to the page component as props
  };
}

export default index;
