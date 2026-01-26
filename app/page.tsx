export const dynamic = "force-dynamic";
export const revalidate = 0;

import { ExperimentalGetTinaClient } from "@/tina/__generated__/types";

export default async function HomePage() {
  const tina = ExperimentalGetTinaClient();

  const res = await tina.homepage({
    relativePath: "homepage.json",
  });

  return (
    <main className="text-center py-32">
      <h1 className="text-5xl font-bold">
        {res.data.homepage.title}
      </h1>
      <p className="mt-4 text-xl text-slate-600">
        {res.data.homepage.subtitle}
      </p>
    </main>
  );
}
