import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Můj Next.js Web",
  description: "Vytvořeno pomocí Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <nav className="flex justify-between items-center p-6 border-b">
          <div className="font-bold text-2xl uppercase tracking-tighter">MůjWeb</div>
          <ul className="flex gap-6 text-slate-600">
            <li><a href="/" className="hover:text-blue-600">Domů</a></li>
            <li><a href="/o-nas" className="hover:text-blue-600">O nás</a></li>
            <li><a href="/kontakt" className="hover:text-blue-600">Kontakt</a></li>
          </ul>
        </nav>
        
        {children}

        <footer className="bg-slate-900 text-white py-10 text-center">
          <p>© {new Date().getFullYear()} MůjWeb. Všechna práva vyhrazena.</p>
        </footer>
      </body>
    </html>
  );
}