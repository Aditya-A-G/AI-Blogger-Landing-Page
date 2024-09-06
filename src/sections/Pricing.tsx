"use client";
import CheckIcon from "@/assets/check.svg";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingTiers = [
  {
    title: "Basic",
    price: 849,
    credits: 50,
    buttonText: "Get started today",
    popular: false,
    inverse: false,
    features: ["50 credits", "High Quality Images", "Generate any Blog"],
  },
  {
    title: "Pro",
    price: 2512,
    credits: 200,
    buttonText: "Get started today",
    popular: true,
    inverse: true,
    features: ["200 credits", "High Quality Images", "Generate any Blog"],
  },
  {
    title: "Enterprise",
    price: 8400,
    credits: 750,
    buttonText: "Get started today",
    popular: false,
    inverse: false,
    features: ["750 credits", "High Quality Images", "Generate any Blog"],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              price,
              credits,
              buttonText,
              popular,
              inverse,
              features,
            }) => {
              return (
                <div
                  key={title}
                  className={clsx(
                    "card",
                    inverse === true && "border-black bg-black text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={clsx(
                        "text-lg font-bold text-black/50",
                        inverse === true && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>

                    {popular === true && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                          animate={{
                            backgroundPositionX: "100%",
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                        >
                          Most Popular
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      {price} Rs
                    </span>
                    <span
                      className={clsx(
                        "tracking-tight font-bold text-black/50",
                        inverse === true && "text-white/60"
                      )}
                    >
                      /{credits} credits
                    </span>
                  </div>
                  <button
                    className={clsx(
                      "btn btn-primary w-full mt-[30px]",
                      inverse === true && "bg-white text-black"
                    )}
                  >
                    <Link href="https://writer.adityacodes.tech/">{buttonText}</Link>
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => {
                      return (
                        <li
                          key={feature}
                          className="text-sm flex items-center gap-4"
                        >
                          <CheckIcon className="h-6 w-6" />
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
