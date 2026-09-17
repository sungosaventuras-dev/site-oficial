"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre nós", href: "/sobre" },
  { name: "Destinos", href: "/destinos" },
  { name: "Experiências", href: "/experiencias" },
  { name: "Galeria", href: "/galeria" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between border-b border-white/20">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Sungo&apos;s
            <span className="ml-1 font-light">Aventuras</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contacto"
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Contacte-nos

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="text-white lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="absolute left-0 top-24 w-full px-6 lg:hidden">
            <nav className="rounded-2xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-neutral-900"
                >
                  Contacte-nos
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

