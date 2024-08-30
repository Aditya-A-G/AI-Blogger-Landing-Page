"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "This AI-powered blogging tool has revolutionized how I create content, making it faster and more engaging.",
    imageSrc: avatar1.src,
    name: "Alex Morgan",
    username: "@alexwrites",
  },
  {
    text: "Our content creation process is now more streamlined and efficient, thanks to this innovative app.",
    imageSrc: avatar2.src,
    name: "Sam Lee",
    username: "@samblogger",
  },
  {
    text: "Managing and publishing blog posts has never been this easy. The AI recommendations are spot-on.",
    imageSrc: avatar3.src,
    name: "Jordan Smith",
    username: "@jordanwrites",
  },
  {
    text: "Integration was a breeze, and the AI tools are incredibly intuitive and helpful for crafting quality content.",
    imageSrc: avatar4.src,
    name: "Taylor Brown",
    username: "@taylorwrites",
  },
  {
    text: "This app simplifies blogging with AI-driven insights, making it easier to generate engaging content quickly.",
    imageSrc: avatar5.src,
    name: "Casey Harris",
    username: "@caseywrites",
  },
  {
    text: "The app's AI features have enhanced our content strategy and improved the overall quality of our posts.",
    imageSrc: avatar6.src,
    name: "Riley Davis",
    username: "@rileydwrites",
  },
  {
    text: "Adopting this AI blogger app has transformed how we generate and manage content, boosting productivity.",
    imageSrc: avatar7.src,
    name: "Morgan Taylor",
    username: "@morgantwrites",
  },
  {
    text: "All-in-one solution for content creation—AI-powered, user-friendly, and highly effective.",
    imageSrc: avatar8.src,
    name: "Sam Wilson",
    username: "@samwrites",
  },
  {
    text: "The AI-driven suggestions and easy-to-use interface make this app indispensable for any serious blogger.",
    imageSrc: avatar9.src,
    name: "Alex Lee",
    username: "@alexblogger",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        className="flex flex-col  gap-6 mt-10 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => {
                return (
                  <div key={username} className="card">
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <Image
                        src={imageSrc}
                        alt={name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">
                          {name}
                        </div>
                        <div className="leading-5 tracking-tight">
                          {username}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center mt-10 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColumn testimonials={firstColumn} duration={15} />
          <TestimonialColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
