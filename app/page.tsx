import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero sekce */}
      <main className="flex-grow">
        <section className="bg-slate-50 py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
              Vítejte na mém novém webu
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Tohle je čistý základ v Next.js. Žádná Tina, jen čistý kód a Tailwind.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Začít projekt
              </button>
              <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition">
                Zjistit více
              </button>
            </div>
          </div>
        </section>

        {/* Sekce s vlastnostmi */}
        <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Rychlost</h3>
            <p className="text-slate-600">Díky Next.js a statickému generování běží web bleskově.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Moderní stack</h3>
            <p className="text-slate-600">React, TypeScript a Tailwind CSS pro snadný vývoj.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Responzivita</h3>
            <p className="text-slate-600">Vše vypadá skvěle na mobilu, tabletu i desktopu.</p>
          </div>
        </section>
      </main>
    </div>
  );
}