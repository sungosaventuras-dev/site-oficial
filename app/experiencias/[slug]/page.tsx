import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const data = {
  "namib-desert-tiger-bay": {
    code: "SA-07", type: "Signature Journey", title: "Namib Desert & Tiger Bay",
    lead: "Where the oldest desert on Earth runs straight into the Atlantic — dunes, ghost towns and starry nights.",
    duration: "5 days / 4 nights", style: "Small-group 4x4 expedition", group: "Based on 4 guests", price: "USD 1,400",
    route: "Moçâmedes · Baía dos Tigres · Iona · Praia do Soba · Curoca", when: "Year-round (best April – November)", image: "/sungos/90.webp",
    highlights: ["Sea crossing to historic Baía dos Tigres", "Ruins of the old fishing town", "Wild camping and stargazing in Iona National Park", "Praia do Soba and the Piambo volcanic pools", "Curoca canyons and the Namib Arch", "Local gastronomy and fishing culture"],
    gallery: ["/sungos/01.webp", "/sungos/11.webp", "/sungos/21.webp", "/sungos/54.webp", "/sungos/60.webp", "/sungos/75.webp"],
  },
  "southern-angola-expedition": {
    code: "SA-09", type: "Expeditions", title: "Southern Angola Expedition",
    lead: "Highlands, mountain passes and the Namib coast — eight days from Luanda to Tiger Bay.",
    duration: "8 days / 7 nights", style: "Private small-group expedition", group: "Based on 6 guests", price: "USD 3,500",
    route: "Luanda · Lubango · Tundavala · Serra da Leba · Namibe · Iona · Baía dos Tigres", when: "Scheduled departure 13–20 Nov 2027 · or on request", image: "/sungos/15.webp",
    highlights: ["Luanda city tour and historic sites", "Tundavala Gap and Serra da Leba", "Iona National Park wildlife and Welwitschia", "Two nights of desert camping near Baía dos Tigres", "Cristo Rei viewpoint over Lubango"],
    gallery: ["/sungos/89.webp", "/sungos/15.webp", "/sungos/70.webp", "/sungos/80.webp", "/sungos/90.webp", "/sungos/88.webp"],
  },
  "far-and-wild": {
    code: "SA-10", type: "Expeditions", title: "Far & Wild Private Expedition",
    lead: "One country, multiple worlds — twelve days from the Atlantic capital to the wildest desert coast in Africa.",
    duration: "12 days / 11 nights", style: "Private tailor-made expedition", group: "1 traveller (private)", price: "USD 12,967",
    route: "Luanda · Malanje · Lubango · Serra da Leba · Namibe · Iona · Baía dos Tigres · Praia do Soba", when: "Dates on request (best May – November)", image: "/sungos/80.webp",
    highlights: ["Luanda markets, history and cuisine", "Pungo Andongo and Kalandula Falls", "Tundavala Gorge", "Mwila cultural experience", "Birdwatching on Serra da Leba", "Iona, Baía dos Tigres, Vanessa shipwreck and Praia do Soba"],
    gallery: ["/sungos/92.webp", "/sungos/62.webp", "/sungos/85.webp", "/sungos/67.webp", "/sungos/80.webp", "/sungos/97.webp"],
  },
  "kalandula-falls": {
    code: "SA-04", type: "City & Short Breaks", title: "Kalandula Falls Escape",
    lead: "Two nights beside one of Africa's mightiest waterfalls — trail, spray, rainbows and silence.",
    duration: "3 days / 2 nights", style: "Private couples' escape", group: "Minimum 2 guests", price: "USD 500",
    route: "Luanda · Malanje · Kalandula · Luanda", when: "Year-round (falls at their fullest Dec – May)", image: "/sungos/62.webp",
    highlights: ["Stay at Pousada Kalandula, overlooking the falls", "Guided descent trail to the base", "Unhurried afternoon to relax and reconnect", "Private vehicle and driver throughout"],
    gallery: ["/sungos/62.webp", "/sungos/83.webp", "/sungos/70.webp", "/sungos/87.webp"],
  },
} as const;

type Item = typeof data[keyof typeof data];

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data[slug as keyof typeof data] as Item | undefined;
  if (!item) notFound();

  return (
    <main className="bg-[#f4f1e9] text-[#171714]">
      <section className="relative min-h-[75vh] overflow-hidden bg-[#171714] text-white">
        <Image src={item.image} alt={item.title} fill priority className="object-cover opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-6 pb-12 pt-32 lg:px-8 lg:pb-16">
          <Link href="/#experiences" className="absolute left-6 top-28 flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 lg:left-8"><ArrowLeft size={15} /> All experiences</Link>
          <p className="text-[10px] uppercase tracking-[.3em] text-white/45">{item.code} · {item.type}</p>
          <h1 className="mt-4 max-w-5xl text-6xl font-medium leading-[.9] tracking-[-.05em] sm:text-7xl lg:text-[7rem]">{item.title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{item.lead}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_320px] lg:px-8 lg:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[.3em] text-black/40">The journey</p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight">At a glance</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">A carefully structured Sungo&apos;s journey combining local knowledge, practical logistics and experiences across Angola&apos;s landscapes and communities.</p>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
            {[["Duration", item.duration], ["Travel style", item.style], ["Group", item.group], ["When", item.when]].map(([a, b]) => (
              <div key={a} className="bg-[#f4f1e9] p-6"><p className="text-[10px] uppercase tracking-[.2em] text-black/40">{a}</p><p className="mt-3 text-sm font-semibold leading-6">{b}</p></div>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-[11px] uppercase tracking-[.3em] text-black/40">Highlights</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.highlights.map((h, i) => <div key={h} className="border-t border-black/15 py-4 text-sm leading-6"><span className="mr-4 text-black/30">{String(i + 1).padStart(2, "0")}</span>{h}</div>)}
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-7 flex items-end justify-between gap-6 border-t border-black/15 pt-8">
              <div><p className="text-[11px] uppercase tracking-[.3em] text-black/40">On the road</p><h2 className="mt-3 text-3xl font-medium">A glimpse of the journey</h2></div>
              <span className="hidden text-[10px] uppercase tracking-[.2em] text-black/35 sm:block">Sungo&apos;s Aventuras</span>
            </div>
            <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {item.gallery.map((image, i) => <div key={image} className={`relative aspect-[1.15/1] overflow-hidden bg-black ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}><Image src={image} alt={`${item.title} — scene ${i + 1}`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition duration-700 hover:scale-105" /></div>)}
            </div>
          </div>

          <div className="mt-14 border-t border-black/15 pt-8"><p className="text-[11px] uppercase tracking-[.3em] text-black/40">Route</p><p className="mt-4 text-lg leading-8">{item.route}</p></div>
        </div>

        <aside className="h-fit border border-black/15 bg-[#e8e1d3] p-7 lg:sticky lg:top-28">
          <p className="text-[10px] uppercase tracking-[.25em] text-black/45">From</p>
          <p className="mt-2 text-4xl font-medium">{item.price}</p>
          <p className="mt-2 text-xs leading-5 text-black/50">Indicative 2026 / 2027 pricing, subject to availability, season, group size and exchange rates at booking.</p>
          <Link href="/contacto" className="mt-7 flex items-center justify-between bg-[#171714] px-5 py-4 text-sm font-semibold text-white">Request this journey <ArrowUpRight size={17} /></Link>
          <a href="https://wa.me/244921506504" className="mt-3 flex items-center justify-center border border-black/20 px-5 py-4 text-sm font-semibold">WhatsApp Sungo&apos;s</a>
          <p className="mt-7 border-t border-black/15 pt-5 text-xs leading-6 text-black/50">Travel trade: net and commissionable rates, group contracts and white-label versions are available to appointed partners.</p>
        </aside>
      </section>
    </main>
  );
}
