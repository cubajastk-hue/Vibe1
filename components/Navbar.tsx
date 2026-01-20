export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">
      <div className="font-bold text-2xl uppercase tracking-tighter">
        MůjWeb
      </div>

      <ul className="flex gap-6 text-slate-600">
        <li><a href="/" className="hover:text-blue-600">Domů</a></li>
        <li><a href="/o-nas" className="hover:text-blue-600">O nás</a></li>
        <li><a href="/kontakt" className="hover:text-blue-600">Kontakt</a></li>
      </ul>
    </nav>
  );
}
