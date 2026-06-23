import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Bilder från ${business.name} på Svartbäcksgatan, Uppsala.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#2d3748] to-[#4a5568] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Galleri</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Riktiga bilder från {business.name} — källa Facebook, Hitta.se och Shimano Service Center.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.gallery.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-2xl shadow-md">
                <img src={item.image} alt={item.label} className="aspect-square w-full object-cover" loading="lazy" />
                <figcaption className="bg-[#f7fafc] px-4 py-3 text-center text-sm font-medium text-[#2d3748]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
