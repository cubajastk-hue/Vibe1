"use client";

type HomepageData = {
  title: string;
  subtitle: string;
};

export default function HomepageClient({ data }: { data: HomepageData }) {
  return (
    <main className="text-center py-32">
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <p className="mt-4 text-xl text-slate-600">{data.subtitle}</p>
    </main>
  );
}
