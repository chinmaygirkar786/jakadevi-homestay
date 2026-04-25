import Image from "next/image";

const rooms = [
  {
    title: "Sea Breeze Deluxe",
    description:
      "A bright, cozy room for couples who want comfort after a day at the beach.",
    highlights: ["AC Option", "Cozy", "Great for Couples"],
    image: "/images/IMG-20260424-WA0024.jpg",
  },
  {
    title: "Family Comfort Suite",
    description:
      "Spacious and easy for families—room to relax, unpack, and feel at home.",
    highlights: ["Family Friendly", "Spacious", "Quiet Nights"],
    image: "/images/IMG-20260424-WA0022.jpg",
  },
  {
    title: "Sunset Standard Room",
    description:
      "Simple, clean, and calm—perfect for short stays and quick coastal trips.",
    highlights: ["Clean & Simple", "Budget Friendly", "Close to Town"],
    image: "/images/IMG-20260424-WA0021.jpg",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-wide text-sky-700">
                Stay options
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Rooms designed for restful coastal days
              </h2>
            </div>

            <div className="hidden sm:block">
              <div className="rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">Pricing</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2">
                    <p className="text-slate-700 font-medium">AC Rooms</p>
                    <p className="text-slate-900 font-semibold">₹1500</p>
                  </div>
                  <div className="rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2">
                    <p className="text-slate-700 font-medium">Non‑AC Rooms</p>
                    <p className="text-slate-900 font-semibold">₹1200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <div className="rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 p-5">
              <p className="text-sm font-semibold text-slate-900">Pricing</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2">
                  <p className="text-slate-700 font-medium">AC Rooms</p>
                  <p className="text-slate-900 font-semibold">₹1500</p>
                </div>
                <div className="rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2">
                  <p className="text-slate-700 font-medium">Non‑AC Rooms</p>
                  <p className="text-slate-900 font-semibold">₹1200</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <article
                key={room.title}
                className="rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 overflow-hidden"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={room.image}
                    alt={`${room.title} room at Jakadevi Homestay Malvan`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 via-transparent to-cyan-300/10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {room.title}
                  </h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {room.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

