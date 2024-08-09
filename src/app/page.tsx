import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className="bg-hero bg-no-repeat bg-cover bg-center h-screen">
          <div className="max-w-6xl mx-auto flex flex-col justify-center items-center md:items-start h-full px-[30px] md:px-0">
            <h1 className="z-10 font-signature text-pn-secondary leading-[22.48px] font-thin text-[4.375rem] md:text-[128px] mt-36">
              Premium Travel
            </h1>
            <h3 className="font-unbounded text-white text-[24px] md:text-[54px]">
              Beyond Expectation
            </h3>
            <p className="max-w-[700px] text-center md:text-justify font-albert-sans text-[#FAF9F5] text-base md:text-2xl">
              Experience the finest that Indonesia has to offer with our curated
              selection of premium trips, ensuring comfort every step of the way
            </p>
            <Button size="sm" variant="outline" className="w-fit mt-6">
              Take me there
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center md:items-start h-full px-[30px] md:px-0 mt-[72px]">
          <div className="w-full">
            <h1 className="z-10 font-signature font-thin text-pn-terniary text-center leading-[26.94px] md:text-[4.375rem] text-[54px]">
              Beyond Premium
            </h1>
            <h3 className="font-unbounded text-center text-pn-primary text-[22px] md:text-[34px]">
              Elevate Your Experience
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mt-[72px] mb-[92px]">
            <div className="shrink">
              <Image
                src="/assets/personal.svg"
                width={90}
                height={90}
                alt="personal"
                loading="lazy"
                className="mx-auto"
              />
              <h3 className="text-center text-pn-primary font-bold uppercase">
                PERSONAL ITINERARIES
              </h3>
              <span className="text-center inline-block">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
              </span>
            </div>
            <div className="shrink">
              <Image
                src="/assets/experience.svg"
                width={90}
                height={90}
                alt="personal"
                loading="lazy"
                className="mx-auto"
              />
              <h3 className="text-center text-pn-primary font-bold uppercase">
                EXCLUSIVE EXPERIENCES
              </h3>
              <span className="text-center inline-block">
                From private charters to behind-the-scenes tours, we offer
                access to unique opportunities that are designed to elevate your
                trip to the next level.
              </span>
            </div>
            <div className="shrink">
              <Image
                src="/assets/facilities.svg"
                width={90}
                height={90}
                alt="personal"
                loading="lazy"
                className="mx-auto"
              />
              <h3 className="text-center uppercase text-pn-primary font-bold">
                Best Facilities
              </h3>
              <span className="text-center inline-block">
                Experience the epitome of with our premium facility, designed to
                provide an unparalleled level of comfort and indulgence.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center md:items-start h-full px-[30px] md:px-0 my-[72px]">
          <div className="inline-flex flex-col md:flex-row md:items-center justify-center gap-6 h-[346px">
            <Image
              src="/assets/img-section.png"
              width={329}
              height={302}
              alt="personal"
              loading="lazy"
              className="mx-auto"
            />
            <div className="space-y-4">
              <h3 className="font-unbounded font-bold text-center md:text-start text-pn-primary text-[22px] md:text-[32px] leading-none">
                Discover Tailored Experiences
              </h3>
              <p className="max-w-[700px] text-center md:text-justify text-sm md:text-base">
                Create your own journey, personalized to suit your preferences
                and interests, ensuring a once-in-a-lifetime adventure awaits.
              </p>
              <Button size="sm" variant="primary" className="w-full md:w-fit">
                Customize Your Trip
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/assets/separator-color.png"
        width={1096}
        height={96}
        alt="personal"
        loading="lazy"
        className="mx-auto"
      />
      <section>
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center md:items-start h-full px-[30px] md:px-0 my-6 md:my-[72px]">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-6">
            <h1 className="font-unbounded font-bold text-center md:text-start text-pn-primary text-[22px] md:text-[32px] leading-none uppercase">
              destinations
            </h1>
            <div className="inline-flex items-center gap-4">
              <Image
                src="/assets/chevron.svg"
                width={44}
                height={44}
                alt="chevron"
                loading="eager"
                // className="mx-auto"
              />
              <span className="text-pn-primary uppercase">Explore more</span>
            </div>
          </div>
          <div className="inline-flex gap-6 my-6 md:my-[72px] flex-col md:flex-row">
            <Image
              src="/assets/img-dummy.png"
              width={536}
              height={374}
              alt="personal"
              loading="lazy"
            />
            <div className="space-y-[8px]">
              <span className="text-pn-primary text-xs md:text-base">
                7 DAYS 6 NIGHTS
              </span>
              <h1 className="font-unbounded font-bold md:text-start text-pn-terniary text-base md:text-4xl leading-none">
                Paradise Gateway: Labuan Bajo
              </h1>
              <span className="font-bold text-pn-primary inline-block">
                Organized by Pandooin
              </span>
              <p className="text-pn-primary text-xs md:text-base">
                Labuan Bajo is a tropical paradise nestled in the westernmost
                part of Flores Island, Indonesia. With its stunning landscapes,
                crystal-clear waters, and vibrant marine life, it's a gateway to
                explore the mesmerizing Komodo National Park.
              </p>
              <div className="flex items-center justify-between pt-14">
                <div>
                  <span className="text-pn-primary text-xs md:text-base">
                    Start from
                  </span>
                  <h3 className="text-[18px] md:text-[28px] font-semibold text-pn-terniary font-unbounded">
                    IDR 5,200,000
                  </h3>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-fit border-2 border-pn-primary text-pn-primary font-bold px-4 py-3"
                >
                  See Details
                </Button>
              </div>
            </div>
          </div>
          {/* scroll horizontal */}
          <div className="flex snap-x snap-mandatory gap-5 w-full mx:auto overflow-scroll hide-scrollbar h-[497px]">
            <div className="snap-center shrink-0 space-y-5 w-[262px]">
              <Image
                src="/assets/img-dummy.png"
                className="snap-center shrink-1"
                width={256}
                height={256}
                loading="lazy"
                alt="tst"
              />
              <div>
                <span className="text-xs text-pn-primary">7 DAYS 6 NIGHTS</span>
                <h3 className="text-pn-terniary font-bold font-unbounded">
                  Paradise Gateway: Labuan Bajo
                </h3>
                <span className="text-pn-primary font-bold">
                  Organized by Pandooin
                </span>
              </div>
              <div>
                <span className="text-xs text-pn-primary">Start from</span>
                <h3 className="font-unbounded text-pn-terniary font-semibold">
                  IDR 5,200,000
                </h3>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-fit border-2 border-pn-primary text-pn-primary font-bold px-4 py-3"
              >
                See Details
              </Button>
            </div>
            <div className="snap-center shrink-0 space-y-5 w-[262px]">
              <Image
                src="/assets/img-dummy.png"
                className="snap-center shrink-0"
                width={256}
                height={256}
                loading="lazy"
                alt="tst"
              />
              <div>
                <span className="text-xs text-pn-primary">7 DAYS 6 NIGHTS</span>
                <h3 className="text-pn-terniary font-bold font-unbounded">
                  Paradise Gateway: Labuan Bajo
                </h3>
                <span className="text-pn-primary font-bold">
                  Organized by Pandooin
                </span>
              </div>
              <div>
                <span className="text-xs text-pn-primary">Start from</span>
                <h3 className="font-unbounded text-pn-terniary font-semibold">
                  IDR 5,200,000
                </h3>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-fit border-2 border-pn-primary text-pn-primary font-bold px-4 py-3"
              >
                See Details
              </Button>
            </div>
            <div className="snap-center shrink-0 space-y-5 w-[262px]">
              <Image
                src="/assets/img-dummy.png"
                className=""
                width={256}
                height={256}
                loading="lazy"
                alt="tst"
              />
              <div>
                <span className="text-xs text-pn-primary">7 DAYS 6 NIGHTS</span>
                <h3 className="text-pn-terniary font-bold font-unbounded">
                  Paradise Gateway: Labuan Bajo
                </h3>
                <span className="text-pn-primary font-bold">
                  Organized by Pandooin
                </span>
              </div>
              <div>
                <span className="text-xs text-pn-primary">Start from</span>
                <h3 className="font-unbounded text-pn-terniary font-semibold">
                  IDR 5,200,000
                </h3>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-fit border-2 border-pn-primary text-pn-primary font-bold px-4 py-3"
              >
                See Details
              </Button>
            </div>
            <div className="snap-center shrink-0 space-y-5 w-[262px]">
              <Image
                src="/assets/img-dummy.png"
                className=""
                width={256}
                height={256}
                loading="lazy"
                alt="tst"
              />
              <div>
                <span className="text-xs text-pn-primary">7 DAYS 6 NIGHTS</span>
                <h3 className="text-pn-terniary font-bold font-unbounded">
                  Paradise Gateway: Labuan Bajo
                </h3>
                <span className="text-pn-primary font-bold">
                  Organized by Pandooin
                </span>
              </div>
              <div>
                <span className="text-xs text-pn-primary">Start from</span>
                <h3 className="font-unbounded text-pn-terniary font-semibold">
                  IDR 5,200,000
                </h3>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-fit border-2 border-pn-primary text-pn-primary font-bold px-4 py-3"
              >
                See Details
              </Button>
            </div>
          </div>
          <div className="inline-flex justify-end w-full items-center gap-4">
            <Image
              src="/assets/chevron.svg"
              width={44}
              height={44}
              alt="chevron"
              loading="eager"
              // className="mx-auto"
            />
            <span className="text-pn-primary uppercase">Explore more</span>
          </div>
        </div>
      </section>
      <section className="bg-pn-secondary">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start h-full px-[30px] md:px-0 py-[72px]">
          <h1 className="text-pn-primary text-[54px] md:text-7xl font-signature mb-6">
            Luxury Footages
          </h1>
          <div className="grid grid-cols-3 w-full gap-6">
            <div className="relative w-full aspect-[356/256] cursor-pointer">
              <Image
                src="/assets/img-dummy.png"
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
            </div>
            <div className="relative w-full aspect-[356/256] cursor-pointer">
              <Image
                src="/assets/img-dummy.png"
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
            </div>
            <div className="relative w-full aspect-[356/256] cursor-pointer">
              <Image
                src="/assets/img-dummy.png"
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
            </div>

            <Image
              src="/assets/separator-white.png"
              className="col-span-full h-full w-full"
              width={1096}
              height={10}
              loading="lazy"
              alt="tst"
            />
            <div className="relative w-full aspect-[356/256] cursor-pointer">
              <Image
                src="/assets/img-dummy.png"
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
            </div>

            <div className="relative w-full aspect-[356/256] cursor-pointer">
              <Image
                src="/assets/img-dummy.png"
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
            </div>
            <div className="relative w-full aspect-[356/256] cursor-pointer">
              <Image
                src="/assets/img-dummy.png"
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start h-full px-[30px] md:px-0 mt-[54px]">
          <div className="bg-banner bg-no-repeat relative w-full bg-center bg-cover h-[100px] flex items-center justify-between px-6">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src="/assets/logo-white.png"
              className="z-50"
              width={145.71}
              height={54}
              loading="eager"
              alt="tst"
            />
            <div className="text-right z-50">
              <span className="text-white">
                Want to see other destinations? Check us out at our website
              </span>
              <div className="flex items-center justify-end gap-3 z-50">
                <Link
                  href="https://pandooin.com/id"
                  className="font-bold text-white hover:underline cursor-pointer transition-all duration-300"
                >
                  pandooin.com
                </Link>
                <Image
                  src="/assets/arrow.svg"
                  className=""
                  width={10.83}
                  height={10.83}
                  loading="eager"
                  alt="tst"
                />
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="relative z-50 mt-[72px]">
            <h1 className="font-bold text-4xl text-pn-terniary font-unbounded">
              Articles
            </h1>
            <span className="text-pn-terniary text-2xl">
              Our curated writings, offering something for every reader.
            </span>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mb-[72px] mt-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2">
              <Image
                src="/assets/img-dummy.png"
                className="h-full w-full grayscale hover:grayscale-0 transition-all cursor-pointer"
                // layout="fill"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
              <div className="bg-pn-terniary px-4 py-[25px]">
                <p className="font-bold text-white line-clamp-2">
                  7 Best Places to Dive in Indonesia: From Bali to Wakatobi
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src="/assets/img-dummy.png"
                className="h-full w-full grayscale hover:grayscale-0 transition-all cursor-pointer"
                // layout="fill"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
              <div className="bg-pn-terniary px-4 py-[25px]">
                <p className="font-bold text-white line-clamp-2">
                  7 Best Places to Dive in Indonesia: From Bali to Wakatobi
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src="/assets/img-dummy.png"
                className="h-full w-full grayscale hover:grayscale-0 transition-all cursor-pointer"
                // layout="fill"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
              <div className="bg-pn-terniary px-4 py-[25px]">
                <p className="font-bold text-white line-clamp-2">
                  7 Best Places to Dive in Indonesia: From Bali to Wakatobi
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src="/assets/img-dummy.png"
                className="h-full w-full grayscale hover:grayscale-0 transition-all cursor-pointer"
                // layout="fill"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
              <div className="bg-pn-terniary px-4 py-[25px]">
                <p className="font-bold text-white line-clamp-2">
                  7 Best Places to Dive in Indonesia: From Bali to Wakatobi
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src="/assets/img-dummy.png"
                className="h-full w-full grayscale hover:grayscale-0 transition-all cursor-pointer"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt="tst"
              />
              <div className="bg-pn-terniary px-4 py-[25px]">
                <p className="font-bold text-white line-clamp-2">
                  7 Best Places to Dive in Indonesia: From Bali to Wakatobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-pn-primary">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start h-full px-[30px] md:px-0 mt-[54px]">
          <div className="flex flex-col items-center justify-between w-full py-6">
            <div>
              <span className="text-white mr-2">&copy;</span>
              <span className="text-white">
                {new Date().getFullYear()} Zamrood by PT Teknologi Pandu Wisata
              </span>
            </div>
            <div className="inline-flex items-center gap-6">
              <Image
                src="/assets/ic-facebook.svg"
                className="cursor-pointer"
                width={24}
                height={24}
                loading="eager"
                alt="tst"
              />
              <Image
                src="/assets/ic-instagram.svg"
                className="cursor-pointer"
                width={24}
                height={24}
                loading="eager"
                alt="tst"
              />
              <Image
                src="/assets/ic-email.svg"
                className="cursor-pointer"
                width={24}
                height={24}
                loading="eager"
                alt="tst"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
