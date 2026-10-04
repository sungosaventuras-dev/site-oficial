import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const gallery = [
  { image: "/sungos/90.webp", title: "Namib Coast", place: "Namibe · Iona" },
  { image: "/sungos/62.webp", title: "Kalandula Falls", place: "Malanje" },
  { image: "/sungos/luanda.jpg", title: "Luanda", place: "Angola" },
  { image: "/sungos/15.webp", title: "Southern Highlands", place: "Lubango" },
  { image: "/sungos/67.webp", title: "People & Culture", place: "Southern Angola" },
  { image: "/sungos/80.webp", title: "Wild Roads", place: "Angola" },
  { image: "/sungos/60.webp", title: "Desert & Atlantic", place: "Namibe" },
  { image: "/sungos/94.webp", title: "Local Encounters", place: "Angola" },
];

export default function Gallery({ full = false }: { full?: boolean }) {
  const items = full ? gallery : gallery.slice(0, 6);

  return (
    <section className="bg-[#f4f1e9] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[.3em] text-black/40">From the road</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[.94] tracking-[-.04em] sm:text-6xl">
              Angola, <span className="font-light italic">as we experience it.</span>
            </h2>
          </div>
          {!full && (
            <Link href="/galeria" className="group flex w-fit items-center gap-3 border-b border-black/25 pb-2 text-sm font-semibold">
              View field gallery
              <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </div>

        <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.image} className={`group relative overflow-hidden bg-[#171714] ${index === 0 && !full ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}>
              <div className={`relative ${index === 0 && !full ? "aspect-[1.5/1] lg:aspect-[1.55/1]" : "aspect-[1.2/1]"}`}>
                <Image src={item.image} alt={`${item.title} — ${item.place}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[9px] uppercase tracking-[.25em] text-white/55">{item.place}</p>
                  <h3 className="mt-2 text-2xl font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
