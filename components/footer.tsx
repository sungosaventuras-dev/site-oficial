
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre nós", href: "/sobre" },
  { name: "Destinos", href: "/destinos" },
  { name: "Experiências", href: "/experiencias" },
  { name: "Hospedagens", href: "/hospedagens" },
  { name: "Galeria", href: "/galeria" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 py-16 text-white lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-3xl font-semibold tracking-tight"
            >
              Sungo&apos;s
              <span className="ml-1 font-light">Aventuras</span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Descubra Angola, explore novos caminhos e viva experiências que
              ficam na memória.
            </p>

            <Link
              href="/contacto"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Entre em contacto
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Navegação
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-white/60 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Contacto
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/60">
              <p>Luanda, Angola</p>
              <p>contacto@sungosaventuras.com</p>
              <p>+244 000 000 000</p>
            </div>

          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-7">
          <div className="flex flex-col justify-between gap-4 text-xs text-white/35 sm:flex-row">
            <p>© {new Date().getFullYear()} Sungo&apos;s Aventuras. Todos os direitos reservados.</p>

            <div className="flex gap-6">
              <Link href="/privacidade" className="transition hover:text-white">
                Política de Privacidade
              </Link>

              <Link href="/termos" className="transition hover:text-white">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

