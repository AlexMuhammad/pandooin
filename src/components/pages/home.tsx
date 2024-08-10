"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { useArticles, useProducts } from "@/queries";
import { toArticle, toRupiah } from "@/utils";
import { useImageRotation } from "@/hooks/useImageRotation";
import { GalleriesType, IProducts } from "@/types/product";
import { ArticleType } from "@/types/article";

const Home = () => {
  const productQuery = useProducts();
  const articleQuery = useArticles();

  const { data: productData } = productQuery.data;
  const { data: articleData } = articleQuery.data;

  const renderDestinations = () => {
    return (
      <>
        {productData.map((item: IProducts, index: number) => {
          /* eslint-disable react-hooks/rules-of-hooks */
          const { src, gallery_alt_text } = useImageRotation(
            item.related_galleries
          );
          const isReversed =
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row";

          return (
            <div
              key={index}
              className={`py-4 md:py-[72px] w-full flex flex-col gap-4 md:gap-6 items-stretch ${isReversed}`}
            >
              <div className="relative md:w-1/2 max-h-[256px] md:max-h-[327px] aspect-video bg-red-500  h-full">
                <Image
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt={`image-${gallery_alt_text}`}
                  className="object-center object-cover h-full w-full"
                  loading="lazy"
                  decoding="async"
                  sizes="100vw"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-between space-y-2 md:space-y-4 text-start lg:text-left">
                <span className="text-pn-primary text-xs md:text-base">
                  7 DAYS 6 NIGHTS
                </span>
                <h1 className="font-unbounded font-bold md:text-start text-pn-terniary text-base md:text-4xl leading-none w-full line-clamp-2">
                  {item.itinerary_name}
                </h1>
                <span className="font-bold text-pn-primary inline-block">
                  Organized by {item.partner_name}
                </span>
                <p className="text-pn-primary text-xs md:text-base text-justify mb-10 line-clamp-3">
                  {item.itinerary_short_description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-pn-primary text-xs md:text-base">
                      Start from
                    </span>
                    <h3 className="text-[18px] md:text-[28px] font-semibold text-pn-terniary font-unbounded">
                      IDR{" "}
                      {toRupiah(
                        item.related_variant?.itinerary_variant_pub_price
                      )}
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
          );
        })}
      </>
    );
  };

  const renderScrollProducts = () => {
    return (
      <div className="flex snap-x snap-mandatory gap-5 w-full mx:auto overflow-scroll hide-scrollbar h-[497px]">
        {productData.map((item: IProducts, index: number) => (
          <div key={index} className="relative snap-center shrink-0 space-y-5">
            <div className="relative w-[262px] h-[200px] md:w-[300px] md:h-[200px] snap-center shrink-1">
              <Image
                src={item.related_galleries[0]?.src}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                alt={item?.related_galleries[0]?.gallery_alt_text}
              />
            </div>
            <div>
              <span className="text-xs text-pn-primary">7 DAYS 6 NIGHTS</span>
              <h3 className="text-pn-terniary font-bold font-unbounded max-w-[262px] md:max-w-[300px] line-clamp-2">
                {item.itinerary_name}
              </h3>
              <span className="text-pn-primary font-bold">
                Organized by {item.partner_name}
              </span>
            </div>
            <div>
              <span className="text-xs text-pn-primary">Start from</span>
              <h3 className="font-unbounded text-pn-terniary font-semibold">
                IDR{" "}
                {toRupiah(item.related_variant?.itinerary_variant_pub_price)}
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
        ))}
      </div>
    );
  };

  const renderLuxuryFootages = () => {
    return (
      <>
        {productData[0].related_galleries
          .slice(0, 7)
          .map((item: GalleriesType, index: number) => (
            <div
              key={index}
              className={`${
                index === 3
                  ? "col-span-full h-full w-full"
                  : "relative w-full aspect-[356/256] cursor-pointer"
              }`}
            >
              <Image
                src={`${
                  index === 3 ? "/assets/separator-white.png" : item.src
                }`}
                className="w-full"
                width={349.33}
                height={349.33}
                loading="lazy"
                alt={index === 3 ? "separator" : `image-${index}`}
              />
            </div>
          ))}
      </>
    );
  };

  const renderArticles = () => {
    return (
      <>
        {articleData.map((item: ArticleType, index: number) => (
          <Link
            href={toArticle(item.slug)}
            key={index}
            className={`flex flex-col ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <Image
              src={item.featured_image}
              className="h-full w-full grayscale hover:grayscale-0 transition-all cursor-pointer"
              width={349.33}
              height={349.33}
              loading="lazy"
              alt={`image-${index}`}
            />
            <div className="bg-pn-terniary px-4 py-[25px]">
              <p className="font-bold text-white line-clamp-1">
                {item.featured_image_caption}
              </p>
            </div>
          </Link>
        ))}
      </>
    );
  };
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
      <section id="discover-tailored-experiences">
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
          {renderDestinations()}
          {renderScrollProducts()}
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
            {renderLuxuryFootages()}
          </div>
        </div>
      </section>
      <section id="articles">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start h-full px-[30px] md:px-0 mt-[54px]">
          <div className="bg-banner bg-no-repeat relative w-full bg-center md:bg-cover h-full md:h-[100px] flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between px-6">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src="/assets/logo-white.png"
              className="z-50"
              width={145.71}
              height={54}
              loading="eager"
              alt="dummy11"
            />
            <div className="text-center md:text-right z-50">
              <span className="text-white">
                Want to see other destinations? Check us out at our website
              </span>
              <div className="flex items-center justify-center md:justify-end gap-3 z-50">
                <Link legacyBehavior href="https://pandooin.com/id">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:underline cursor-pointer transition-all duration-300"
                  >
                    Pandooin
                  </a>
                </Link>
                <Image
                  src="/assets/arrow.svg"
                  className=""
                  width={10.83}
                  height={10.83}
                  loading="eager"
                  alt="dummy12"
                />
              </div>
            </div>
          </div>

          <div className="relative z-50 mt-[72px]">
            <h1 className="font-bold text-4xl text-pn-terniary font-unbounded">
              Articles
            </h1>
            <span className="text-pn-terniary text-2xl">
              Our curated writings, offering something for every reader.
            </span>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mb-[72px] mt-6">
            {renderArticles()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
