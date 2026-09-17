
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const stays = [
  {
    image: "/hero2.jpg",
    location: "Luanda",
    title: "Hospedagens em Luanda",
    description:
      "Encontre espaços confortáveis para descansar, relaxar e aproveitar a cidade.",
  },
  {
    image: "/hero1.jpg",
    location: "Cabo Ledo",
    title: "Estadias junto à natureza",
    description:
      "Acorde perto do mar e viva uma experiência diferente em Angola.",
  },
];

export default function Stays() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
              <span className="h-px w-10 bg-white/40" />
              Hospedagens
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              O lugar onde fica também faz parte da
              <span className="font-light italic"> aventura.</span>
            </h2>
          </div>

          <Link
            href="/hospedagens"
            className="group flex w-fit items-center gap-3 text-sm font-semibold"
          >
            Ver hospedagens
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {stays.map((stay) => (
            <Link
              key={stay.title}
              href="/hospedagens"
              className="group relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              <div className="flex items-end justify-between gap-6 bg-neutral-900 p-7 lg:p-8">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                    <MapPin size={13} />
                    {stay.location}
                  </div>

                  <h3 className="mt-3 text-2xl font-medium lg:text-3xl">
                    {stay.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                    {stay.description}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:bg-white group-hover:text-neutral-900">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

