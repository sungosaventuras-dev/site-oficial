
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    image: "/hero1.jpg",
    location: "Bengo",
    title: "Cabo Ledo",
    description: "Praias, natureza e aventura junto ao mar.",
    size: "large",
  },
  {
    image: "/hero2.jpg",
    location: "Luanda",
    title: "Luanda",
    description: "Descubra a capital e os seus encantos.",
    size: "small",
  },
  {
    image: "/hero3.webp",
    location: "Angola",
    title: "Novos destinos",
    description: "Explore lugares únicos por todo o país.",
    size: "small",
  },
];

export default function Destinations() {
  return (
    <section className="bg-neutral-100 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-px w-10 bg-neutral-400" />
              Destinos
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Lugares que merecem ser
              <span className="font-light italic"> descobertos.</span>
            </h2>
          </div>

          <Link
            href="/destinos"
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-neutral-900"
          >
            Ver todos os destinos
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/destinos/cabo-ledo"
            className="group relative min-h-[520px] overflow-hidden rounded-[2rem] lg:min-h-[680px]"
          >
            <Image
              src={destinations[0].image}
              alt={destinations[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                {destinations[0].location}
              </p>

              <div className="mt-3 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-medium lg:text-4xl">
                    {destinations[0].title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    {destinations[0].description}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-5">
            {destinations.slice(1).map((destination) => (
              <Link
                key={destination.title}
                href="/destinos"
                className="group relative min-h-[330px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-white lg:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {destination.location}
                    </p>

                    <h3 className="mt-2 text-2xl font-medium lg:text-3xl">
                      {destination.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/65">
                      {destination.description}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition group-hover:bg-white group-hover:text-neutral-900">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

