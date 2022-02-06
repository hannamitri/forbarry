import { useRouter } from "next/router";
import React from "react";

const ClientsProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = (e) => {
    e.preventDefault();
    // router.push("/clients/max/projecta");
    router.push(
      {
        pathname: "/clients/[id]/[clientprojectid]",
        query: { id: "max", clientprojectid: "projecta" },
      },
      null,
      { shallow: true }
    );
  };

  return (
    <div>
      <h1>The project of a given client</h1>
      <button onClick={(e) => loadProjectHandler(e)}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;
