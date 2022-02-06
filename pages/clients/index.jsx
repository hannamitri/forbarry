import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    {
      id: "max",
      name: "Maximiliam",
    },
    {
      id: "manu",
      name: "Manuel",
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((item, index) => (
          <li key={index}>
            {/* <Link href={`/clients/${item.id}`}>{item.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
