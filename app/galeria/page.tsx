import Gallery from "@/components/gallery";

export const metadata = {
  title: "Field Gallery | Sungo's Aventuras",
  description: "A visual journey through Angola with Sungo's Aventuras.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#f4f1e9] pt-24">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8 lg:pt-20">
        <p className="text-[11px] uppercase tracking-[.3em] text-black/40">Sungo&apos;s field gallery</p>
        <h1 className="mt-5 max-w-5xl text-6xl font-medium leading-[.9] tracking-[-.055em] sm:text-7xl lg:text-[8rem]">
          Angola from <span className="font-light italic">the road.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
          Landscapes, wildlife, people and the moments between destinations — captured across the journeys Sungo&apos;s operates in Angola.
        </p>
      </div>
      <Gallery full />
    </main>
  );
}
