import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={45} alt="Saas logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="https://writer.adityacodes.tech/">Dashboard</Link>
          <Link href="#product">Product</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="https://www.freeprivacypolicy.com/live/578bf905-7095-4087-add3-7d3c73f88856">Privacy Policy</Link>
          <Link href="https://merchant.razorpay.com/policy/OqNp0Cn2uJUKWl/terms">Terms & Conditions</Link>
          <Link href="https://merchant.razorpay.com/policy/OqNp0Cn2uJUKWl/refund">Cancellation & Refund</Link>

        </nav>
        <div className="mt-5">
          <h2 className="text-lg font-bold">Contact us</h2>
          <p className="mt-2">+91 9136795245</p>
          <p>adityaghadge360@gmail.com</p>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <Link href="https://x.com/AdityaGhad47567">
            <SocialX />
          </Link>
          <Link href="https://www.linkedin.com/in/aditya-ghadge/">
            <SocialLinkedIn />
          </Link>
          <Link href="https://youtu.be/0ZnR9GssL5s">
            <SocialYoutube />
          </Link>
        </div>
        <p className="mt-6">
          &copy; 2024 AI Blogger, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
