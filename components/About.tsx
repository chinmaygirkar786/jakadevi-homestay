import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-10">
                <p className="text-sm font-semibold tracking-wide text-sky-700">
                  A peaceful coastal stay
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                  Comfort, calm, and the Malvan shoreline nearby
                </h2>
                <p className="mt-5 text-slate-700 leading-relaxed">
                  Jakadevi Homestay is a relaxed, family-friendly space designed
                  for slow mornings, beach afternoons, and easy evenings. Expect
                  clean rooms, warm hospitality, and everything you need for a
                  simple coastal getaway.
                </p>
                <p className="mt-4 text-slate-900 font-semibold">
                  Rental bikes available
                </p>
              </div>

              <div className="relative min-h-[260px] lg:min-h-full">
                <Image
                  src="/images/IMG-20260424-WA0027.jpg"
                  alt="Homestay surroundings"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/15 via-transparent to-cyan-300/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

