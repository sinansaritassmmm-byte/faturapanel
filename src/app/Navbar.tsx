"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="site-header">
      <div className="container header-wrap">
        <div className="logo">
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Sinan Sarıtaş — SMMM
          </Link>
        </div>

        <input id="nav-toggle" type="checkbox" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          ☰
        </label>

        <nav>
          <ul>
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                href="/hizmetler"
                className={isActive("/hizmetler") ? "active" : ""}
              >
                Hizmetler
              </Link>
            </li>
            <li>
              <Link
                href="/pratik-bilgiler"
                className={isActive("/pratik-bilgiler") ? "active" : ""}
              >
                Pratik Bilgiler
              </Link>
            </li>
            <li>
              <Link
                href="/iletisim"
                className={isActive("/iletisim") ? "active" : ""}
              >
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/kvkk" className={isActive("/kvkk") ? "active" : ""}>
                KVKK
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
