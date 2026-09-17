import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import ReservationForm from "@/components/reservation-form";
import Footer from "@/components/footer";

const destinations = [
  {
    image: "/hero1.jpg",
    location: "Bengo",
    title: "Cabo Ledo",
    description:
      "Praias, natureza e aventura num dos destinos mais fascinantes de Angola.",
  },
  {
    image: "/hero2.jpg",
    location: "Luanda",
    title: "Luanda",
    description:
      "Uma cidade vibrante onde cultura, gastronomia e experiências se encontram.",
  },
  {
    image: "/hero3.webp",
    location: "Angola",
    title: "Descubra mais",
    description:
      "Novos lugares, novas histórias e experiências para viver.",
  },
];

export default function DestinosPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative flex min-h-[580px] items-end overflow-hidden bg-neutral-900">
        <Image
          src="/hero1.jpg"
          alt="Destinos em Angola"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              <span className="h-px w-10 bg-white/60" />
              Sungo&apos;s Aventuras
            </p>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Descubra novos
              <br />
              <span className="font-light italic">destinos.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Lugares para conhecer, explorar e viver. Encontre o próximo
              destino para a sua aventura.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                Explore Angola
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Escolha o seu próximo
                <span className="font-light italic"> destino.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-neutral-500">
              De praias paradisíacas a cidades cheias de vida, descubra lugares
              que tornam cada viagem especial.
            </p>
          </div>

          <div className="space-y-6">
            <Link
              href="#reservar"
              className="group block"
            >
              <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-neutral-200">
                <Image
                  src={destinations[0].image}
                  alt={destinations[0].title}
                  fill
                  sizes="100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10 lg:p-12">
                  <div className="flex items-end justify-between gap-8">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                        <MapPin size={13} />
                        {destinations[0].location}
                      </div>

                      <h3 className="mt-3 text-4xl font-medium sm:text-5xl lg:text-6xl">
                        {destinations[0].title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                        {destinations[0].description}
                      </p>
                    </div>

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={21} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="grid gap-6 md:grid-cols-2">
              {destinations.slice(1).map((destination) => (
                <Link
                  href="#reservar"
                  key={destination.title}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-200">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 text-white lg:p-8">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                        <MapPin size={13} />
                        {destination.location}
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-5">
                        <div>
                          <h3 className="text-3xl font-medium">
                            {destination.title}
                          </h3>

                          <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                            {destination.description}
                          </p>
                        </div>

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition duration-300 group-hover:bg-white group-hover:text-neutral-900">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="reservar"
        className="bg-neutral-100 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-px w-10 bg-neutral-400" />
              Reserve a sua viagem
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              O seu próximo destino
              <span className="font-light italic"> começa aqui.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Preencha os seus dados e conte-nos o que procura. A nossa equipa
              entrará em contacto consigo para tratar dos detalhes da sua
              reserva.
            </p>
          </div>

          <ReservationForm />
        </div>
      </section>
          <Footer/>
    </main>
  
  );
}

