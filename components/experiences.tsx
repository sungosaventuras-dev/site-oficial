
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Aventuras",
    description:
      "Momentos para quem procura adrenalina, natureza e novas descobertas.",
    image: "/hero1.jpg",
  },
  {
    number: "02",
    title: "Passeios",
    description:
      "Conheça lugares especiais e aproveite cada momento sem pressa.",
    image: "/hero2.jpg",
  },
  {
    number: "03",
    title: "Experiências",
    description:
      "Vivências pensadas para criar memórias que ficam para sempre.",
    image: "/hero3.webp",
  },
];

export default function Experiences() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-px w-10 bg-neutral-400" />
              Experiências
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Viva cada momento
              <span className="font-light italic"> de outra forma.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-neutral-600">
              Da aventura ao descanso, criamos experiências para diferentes
              formas de conhecer, explorar e aproveitar Angola.
            </p>

            <Link
              href="/experiencias"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Explorar experiências
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="space-y-5">
            {experiences.map((experience) => (
              <Link
                key={experience.number}
                href="/experiencias"
                className="group grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50 transition hover:border-neutral-300 lg:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[220px] overflow-hidden lg:min-h-[250px]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 180px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-7 lg:p-9">
                  <div>
                    <span className="text-xs font-medium tracking-[0.2em] text-neutral-400">
                      {experience.number}
                    </span>

                    <h3 className="mt-5 text-2xl font-medium tracking-tight text-neutral-900 lg:text-3xl">
                      {experience.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600 lg:text-base">
                      {experience.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-500">
                      Descobrir
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
