
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const gallery = [
  {
    image: "/hero1.jpg",
    title: "Cabo Ledo",
    className: "lg:row-span-2",
  },
  {
    image: "/hero2.jpg",
    title: "Luanda",
    className: "",
  },
  {
    image: "/hero3.webp",
    title: "Angola",
    className: "",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-px w-10 bg-neutral-400" />
              Galeria
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Momentos que contam
              <span className="font-light italic"> histórias.</span>
            </h2>
          </div>

          <Link
            href="/galeria"
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-neutral-900"
          >
            Ver galeria completa
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/galeria"
            className="group relative min-h-[500px] overflow-hidden rounded-[2rem] lg:min-h-[650px]"
          >
            <Image
              src={gallery[0].image}
              alt={gallery[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Sungo&apos;s Aventuras
              </p>

              <h3 className="mt-2 text-3xl font-medium">{gallery[0].title}</h3>
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {gallery.slice(1).map((item) => (
              <Link
                key={item.title}
                href="/galeria"
                className="group relative min-h-[300px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-7 text-white">
                  <h3 className="text-2xl font-medium">{item.title}</h3>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition group-hover:bg-white group-hover:text-neutral-900">
                    <ArrowUpRight size={17} />
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

