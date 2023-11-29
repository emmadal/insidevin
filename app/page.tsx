import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/Landing/Header"));
const Trusted = dynamic(() => import("./components/Landing/Trusted"));
const WhyInside = dynamic(() => import("./components/Landing/WhyInside"));
const PrepareReport = dynamic(
  () => import("./components/Landing/PrepareReport"),
);
const Testimonial = dynamic(() => import("./components/Landing/Testimonial"));
const Faq = dynamic(() => import("./components/Landing/Faq"));

export default function Home() {
  return (
    <main>
      <Header />
      <Trusted />
      <WhyInside />
      <PrepareReport />
      <Testimonial />
      <Faq />
    </main>
  );
}
