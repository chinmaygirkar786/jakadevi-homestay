import Image from "next/image";
import { MapPin, PhoneCall } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div id="contact" className="scroll-mt-24" />
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg shadow-black/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="h-full rounded-2xl border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 p-6 sm:p-8">
                  <p className="text-sm font-semibold tracking-wide text-sky-700">
                    Contact
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                    Call for availability
                  </h2>

                  <div className="mt-7 space-y-4 text-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center size-10 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-300 text-slate-900 shadow-sm shadow-black/10">
                        <PhoneCall className="size-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">Phone</p>
                        <p className="mt-1 font-medium text-slate-800">
                          9404821656
                        </p>
                        <p className="font-medium text-slate-800">9764180917</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center size-10 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-300 text-slate-900 shadow-sm shadow-black/10">
                        <MapPin className="size-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">Location</p>
                        <p className="mt-1 font-medium text-slate-800">
                          Near Malvan Post Office, Behind of Swami Hotel
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:9404821656"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg shadow-black/10 hover:bg-slate-800 transition-colors"
                    >
                      Call 9404821656
                    </a>
                    <a
                      href="tel:9764180917"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-900/15 bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Call 9764180917
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-cyan-300 opacity-25" />
                <div className="relative p-6 sm:p-10 h-full flex items-end">
                  <div className="w-full rounded-2xl overflow-hidden border border-white/35 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10">
                    {/* Desktop-only decorative image strip */}
                    <div className="hidden lg:block relative h-44">
                      <Image
                        src="/images/IMG-20260424-WA0028.jpg"
                        alt="Coastal vibe"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 520px, 0px"
                      />
                      <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 via-transparent to-cyan-300/25" />
                    </div>

                    <div className="p-6">
                      <p className="text-slate-900 font-semibold">
                        Jakadevi Homestay
                      </p>
                      <p className="mt-2 text-slate-700">
                        A calm base for Malvan beaches, local food, and easy
                        rides.
                      </p>
                      <p className="mt-4 text-slate-700 text-sm font-medium">
                        <span className="lg:hidden">
                          Tip: Tap a call button above to connect instantly.
                        </span>
                        <span className="hidden lg:inline">
                          Tip: Use the phone numbers on the left to call
                          instantly.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

