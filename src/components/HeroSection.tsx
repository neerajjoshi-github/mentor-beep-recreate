import { Button } from "./ui/button";
import Marquee from "./ui/marquee";
import Airtel from "../assets/companies/airtel.svg";
import Amazon from "../assets/companies/amazon.svg";
import Coca from "../assets/companies/coca.svg";
import Google from "../assets/companies/google.svg";
import Paytm from "../assets/companies/paytm.svg";
import Tata from "../assets/companies/tata.svg";
import RevealAnimation from "./RevealAnimation";

const companies = [
  {
    id: 1,
    name: "airtel",
    logo: Airtel,
  },
  {
    id: 2,
    name: "amazon",
    logo: Amazon,
  },
  {
    id: 3,
    name: "coca",
    logo: Coca,
  },
  {
    id: 4,
    name: "paytm",
    logo: Paytm,
  },
  {
    id: 5,
    name: "tata",
    logo: Tata,
  },
  {
    id: 6,
    name: "google",
    logo: Google,
  },
];

const HeroSection = () => {
  return (
    <div className="relative px-4 md:px-6 w-full h-screen flex items-center justify-center overflow-x-hidden">
      <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:4rem_3rem]">
        <div className="-z-10 absolute bottom-auto left-0 top-0 h-[200px] aspect-square  translate-y-[40%] rounded-full bg-primary opacity-80 blur-[100px]"></div>
      </div>

      <div className="max-[1280px] flex h-full items-center gap-6 z-[10]">
        <div className="flex flex-col gap-8">
          <RevealAnimation>
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-black capitalize">
              Grow your <span>skills</span>, <br /> define your{" "}
              <span className="text-primary">Future</span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <p className="text-sm sm:text-base lg:text-lg lg:w-3/4">
              Say hello to industry-grade programs that get you assured
              internship opportunities & guaranteed jobs!
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="flex items-center gap-6">
              <Button size="lg">Our Programs</Button>
              <Button variant="outline" size="lg">
                About Us
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <div className="max-lg:hidden absolute -right-60 top-0 aspect-square h-full">
        <img src="/hero.png" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="bg-background w-full absolute bottom-0 h-14 border-y flex items-center">
        <Marquee>
          {companies.map((company) => (
            <div key={company.id} className="h-8 mx-8">
              <img
                src={company.logo}
                alt={company.name}
                className="h-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
