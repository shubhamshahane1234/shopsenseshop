import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      {/* HERO SECTION */}

      {/* <div className="absolute inset-0 bg-black/50" /> */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[86vh]">
        <Image
          src="/shopsense_banner.jpg"
          alt="Banner"
          fill
          priority
          sizes="60vw"
          className="lg:object-cover"
        />
      </div>

      {/* FEATURE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Shop With Us?
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              We provide high-quality products with premium customer experience.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Premium Quality",
              "Fast Delivery",
              "Secure Payment",
              "24/7 Support",
              "Easy Returns",
              "Best Deals",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4EFF1] text-[#1d7e84] mb-6 text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>

                <p className="text-gray-500">
                  Experience seamless shopping with our modern platform and
                  trusted service.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
