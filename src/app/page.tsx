import Button from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="bg-hero h-screen">
          <div className="max-w-5xl mx-auto flex flex-col justify-center items-center md:items-start h-full px-[30px] md:px-0">
            <h1 className="z-10 font-signature text-pn-secondary leading-[22.48px] font-thin text-[4.375rem] md:text-[128px]">
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
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center md:items-start h-full px-[30px] md:px-0 my-[72px]">
          <div className="w-full">
            <h1 className="z-10 font-signature font-thin text-pn-terniary text-center leading-[26.94px] md:text-[4.375rem] text-[54px]">
              Beyond Premium
            </h1>
            <h3 className="font-unbounded text-center text-pn-primary text-[22px] md:text-[34px]">
              Elevate Your Experience
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            <div className="shrink">
              <Image
                src="/assets/personal.svg"
                width={90}
                height={90}
                alt="personal"
                loading="lazy"
                className="mx-auto"
              />
              <h3 className="text-center">PERSONAL ITINERARIES</h3>
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
              <h3 className="text-center">PERSONAL ITINERARIES</h3>
              <span className="text-center inline-block">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
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
              <h3 className="text-center">PERSONAL ITINERARIES</h3>
              <span className="text-center inline-block">
                Our premium travel services offer tailor-made itineraries
                crafted to suit your unique preferences and desires.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
