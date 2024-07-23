import RevealAnimation from "./RevealAnimation";

import Svg1 from "../assets/chooseUs/1.svg";
import Svg2 from "../assets/chooseUs/2.svg";
import Svg3 from "../assets/chooseUs/3.svg";
import Svg4 from "../assets/chooseUs/4.svg";
import Svg5 from "../assets/chooseUs/5.svg";
import Svg6 from "../assets/chooseUs/6.svg";

const chooseUs: Omit<CardProps, "index">[] = [
  {
    title: "Assurance",
    description:
      "Our partnerships with top companies and organizations ensure that our students receive valuable hands-on experience.",
    link: "",
    imageURL: Svg1,
  },
  {
    title: "One-on-One Mentorship",
    description:
      "Whether you need help with program material or career advice, our mentors are there to assist you every step of the way.",
    link: "",
    imageURL: Svg2,
  },
  {
    title: "Word-Class Curriculum",
    description:
      "Our platform features high-quality, comprehensive courses designed by experts in the industry.",
    link: "",
    imageURL: Svg3,
  },
  {
    title: "Lowest Pricing",
    description:
      "We believe that education should be accessible to everyone, regardless of their financial situation.",
    link: "",
    imageURL: Svg4,
  },
  {
    title: "Global Students Community",
    description:
      "Collaborate, network, and grow with like-minded individuals as you progress in your education and career.",
    link: "",
    imageURL: Svg5,
  },
  {
    title: "Work based learning",
    description:
      "Experience real-world work through our work-based learning program on MentorBeep.",
    link: "",
    imageURL: Svg6,
  },
];

const CareerSection = () => {
  return (
    <div className="bg-background w-full flex flex-col items-center py-10 px-2">
      <div className="max-w-[1080px] w-full flex flex-col gap-8 items-center">
        <RevealAnimation>
          <h3 className="text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Why Choose Us?
          </h3>
        </RevealAnimation>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {chooseUs.map((item, i) => {
            return <Card key={item.title} {...item} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerSection;

interface CardProps {
  title: string;
  imageURL: string;
  description: string;
  link: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, imageURL, description, index }) => {
  return (
    <RevealAnimation delay={index * 0.1} simple from="top">
      <div className="rounded-md p-3 flex flex-col items-center gap-2">
        <div className="aspect-square h-12 sm:h-16 md:h-24 lg:h-32">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-sm sm:text-base md:text-lg font-bold">{title}</p>
          <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-medium">
            {description}
          </p>
        </div>
      </div>
    </RevealAnimation>
  );
};
