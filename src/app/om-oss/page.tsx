import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Lär känna ${business.name} — cykelverkstad på Svartbäcksgatan i Uppsala.`,
};

export default function AboutPage() {
  const about = "about" in business ? business.about : null;
  const aboutImage = "aboutImage" in business ? business.aboutImage : null;

  return (
    <>
      <section className="bg-gradient-to-br from-[#2d3748] to-[#4a5568] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Om {business.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            {about?.headline ?? `Cykelverkstad på ${business.address.street} i Uppsala.`}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#2d3748]">Välkommen till oss</h2>
            {about?.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-[#4a5568]/80">
                {p}
              </p>
            ))}
          </div>

          {aboutImage ? (
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src={aboutImage} alt={business.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ) : (
            <div className="rounded-3xl bg-[#f7fafc] p-8">
              <h2 className="text-2xl font-bold text-[#2d3748]">I siffror</h2>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-sm font-medium text-[#4a5568]/60">Betyg</dt>
                  <dd className="text-3xl font-bold text-[#4a5568]">{business.rating} / 5</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-[#4a5568]/60">Omdömen</dt>
                  <dd className="text-3xl font-bold text-[#4a5568]">{business.reviewCount}</dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#2d3748]">Vill du veta mer?</h2>
          <p className="mt-4 text-[#4a5568]/70">Ring oss eller besök butiken på Svartbäcksgatan.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#4a5568] px-8 py-4 font-semibold text-white transition hover:bg-[#2d3748]"
            >
              Kontakta oss
            </Link>
            <a
              href={business.bookingUrl}
              className="rounded-full border border-[#4a5568] px-8 py-4 font-semibold text-[#4a5568] transition hover:bg-[#f7fafc]"
            >
              Ring oss
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
