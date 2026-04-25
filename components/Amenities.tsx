import { Bike, Car, Shell, Users } from "lucide-react";

const amenities = [
  { label: "Parking", icon: Car },
  { label: "Rental Bikes", icon: Bike },
  { label: "Nearby Beach Access", icon: Shell },
  { label: "Family Friendly", icon: Users },
];

export function Amenities() {
  return (
    <section className="py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 p-6 sm:p-10">
            <div id="amenities" className="scroll-mt-24" />
            <p className="text-sm font-semibold tracking-wide text-sky-700">
              Essentials
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Amenities for an easy stay
            </h2>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {amenities.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.label}
                    className="rounded-2xl border border-slate-900/10 bg-white/70 backdrop-blur-md p-5 flex items-center gap-3 shadow-sm shadow-black/5"
                  >
                    <span className="inline-flex items-center justify-center size-10 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-300 text-slate-900">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-slate-900 font-semibold text-sm">
                      {a.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

