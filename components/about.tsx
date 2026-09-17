import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-px w-10 bg-neutral-400" />
              Sobre a Sungo&apos;s
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Mais do que viajar,
              <span className="font-light italic"> viver experiências.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              A Sungo&apos;s Aventuras nasceu para aproximar pessoas de
              destinos, lugares e experiências que tornam cada viagem
              inesquecível.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              Descobrimos os melhores caminhos, conectamos viajantes a
              experiências únicas e ajudamos a tornar cada momento especial.
            </p>

            <Link
              href="/sobre"
              className="group mt-9 inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-sm font-semibold text-neutral-900"
            >
              Conheça a Sungo&apos;s
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/hero2.jpg"
                alt="Experiências Sungo's Aventuras"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-2xl bg-neutral-900 p-6 text-white shadow-xl sm:block lg:-left-10">
              <p className="text-4xl font-light">01</p>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Descobrir novos lugares é apenas o começo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

