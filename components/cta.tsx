
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="bg-neutral-100 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900 px-8 py-16 text-center text-white sm:px-12 lg:px-20 lg:py-24">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              A sua próxima aventura começa aqui
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Pronto para descobrir
              <span className="font-light italic"> algo novo?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              Encontre destinos, hospedagens e experiências para tornar a sua
              próxima viagem inesquecível.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/destinos"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Começar a explorar
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/contacto"
                className="flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Fale connosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

