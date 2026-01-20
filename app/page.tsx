import React from "react";
import { client } from "@/tina/__generated__/client";

export default async function HomePage() {
  const res = await client.queries.homepage({
    relativePath: "homepage.json",
  });

  const { title, subtitle } = res.data.homepage;

  return (
    <main className="text-center py-32">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mt-4 text-xl text-slate-600">{subtitle}</p>
    </main>
  );
}
