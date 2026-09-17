"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const suggestions = [
  {
    image: "/hero1.jpg",
    label: "Visite",
    title: "Cabo Ledo",
    description: "Descubra praias, natureza e aventura.",
    href: "/destinos",
  },
  {
    image: "/hero2.jpg",
    label: "Hospede-se em",
    title: "Luanda",
    description: "Encontre lugares para ficar e aproveitar.",
    href: "/destinos",
  },
  {
    image: "/hero3.webp",
    label: "Conheça",
    title: "Angola com a Sungo's",
    description: "Experiências pensadas para si.",
    href: "/experiencias",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % suggestions.length);
  };

  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + suggestions.length) % suggestions.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-900">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/hero1.jpg"
          alt="Sungo's Aventuras"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-0 pt-32 lg:px-8">
        <div className="max-w-4xl pb-16">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
            <span className="h-px w-10 bg-white/70" />
            Sungo&apos;s Aventuras
          </p>

          <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Descubra.
            <br />
            Explore.
            <br />
            <span className="font-light italic">Viva.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Conectamos pessoas a destinos, hospedagens e experiências
            inesquecíveis. Descubra Angola com quem conhece cada caminho.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/destinos"
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Explorar destinos

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/experiencias"
              className="flex w-fit items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Ver experiências
            </Link>
          </div>
        </div>

        {/* Carrossel inferior */}
        <div className="relative border-t border-white/20">
          <div className="flex items-center justify-between py-5">
            {/* Conteúdo da sugestão */}
            <Link
              href={suggestions[current].href}
              className="group flex items-center gap-5"
            >
              <div className="hidden h-16 w-24 overflow-hidden rounded-lg sm:block">
                <Image
                  src={suggestions[current].image}
                  alt={suggestions[current].title}
                  width={96}
                  height={64}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {suggestions[current].label}
                </p>

                <h2 className="mt-1 text-lg font-medium sm:text-xl">
                  {suggestions[current].title}
                </h2>

                <p className="mt-1 hidden text-sm text-white/60 sm:block">
                  {suggestions[current].description}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* Controles */}
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-2 sm:flex">
                {suggestions.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Mostrar ${item.title}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === current
                        ? "w-10 bg-white"
                        : "w-5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={previousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Sugestão anterior"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Próxima sugestão"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-28 right-8 hidden items-center gap-3 text-white/60 lg:flex">
        <span className="text-xs uppercase tracking-[0.2em]">
          Descubra mais
        </span>
        <ArrowDown size={17} className="animate-bounce" />
      </div>
    </section>
  );
}

