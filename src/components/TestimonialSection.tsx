import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import GovMaharashtra from "../assets/awards/2.png";
import GlobalStudent from "../assets/awards/1.png";
import SharkTank from "../assets/awards/5.png";
import EducationMinistry from "../assets/awards/3.png";
import StartupsAward from "../assets/awards/4.png";
import RevealAnimation from "./RevealAnimation";

const testimonials: Testimonial[] = [
  {
    name: "Varun Raj",
    company: "Dafidy technologies",
    review:
      "In spite of my limited programming knowledge and lack of confidence, I joined the Full Stack Program under the guidance of my trainer. With my MERN Stack specialization and participation in their unique Code-Along Sessions, I am now employed by Dafidy Technologies, Bengaluru. Astonished and delighted by my transformation from a beginner to a developer. Thanks a lot, Unikaksha!",
    imageURL:
      "https://static.wixstatic.com/media/165a91_f02af3789cd247bb9b2ae963866c2076~mv2.png/v1/crop/x_6,y_0,w_378,h_378/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image019.png",
  },
  {
    name: "Prathamesh Ravindra Kondaskar",
    company: "Cirrius Technology",
    review:
      "My The training I received at Unikaksha helped me achieve success in my current position, as a Team Leader. In addition to being a wonderful teacher, my trainer was also a great guide.In addition to covering the topics in a unique way, she also provided some great examples. Live examples were used in addition to theoretical knowledge.",
    imageURL:
      "https://static.wixstatic.com/media/165a91_e6771bb7e99b4c46969b761e5fa41dc4~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image015.png",
  },
  {
    name: "Venugopal",
    company: "Cloud Core Pune",
    review:
      "Despite coming from a mechanical background, she wanted to make a career in IT. I was greatly helped by my trainer at Unikaksha during the entire learning process and in my project work. During my training, practical assignments were the main focus, which helped me land my job.",
    imageURL:
      "https://static.wixstatic.com/media/165a91_077f3905c0d247ca91dcce523c567363~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image011.png",
  },
  {
    name: "Raj Patole",
    company: "Deloitte India",
    review:
      "A typical software developer's day is not 100% code. The majority of the time is spent on analysis, design, and communication with other stakeholders, while the remaining 20% is spent on actual coding. ",
    imageURL:
      "https://static.wixstatic.com/media/165a91_079915c6b10b4c34bdc1e718cac6ffb9~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image017.png",
  },
  {
    name: "Anil Kumar",
    company: "HCL Tech",
    review:
      "I have taken training in RHCSA, RHCE, AWS, and AZ-303, and I have cleared all my certificate exams. All thanks to the trainers at Unikaksha for providing me with good quality training and support during the COVID-19 pandemic that helped enhance my skills.",
    imageURL:
      "https://static.wixstatic.com/media/165a91_338f64bf5a7d40a291ee8b418f1265c9~mv2.png/v1/crop/x_0,y_1,w_883,h_883/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image001.png",
  },
  {
    name: "Mohd Tabish Ali",
    company: "HCL Tech",
    review:
      "As part of my Corporate Training, I gained expertise in Linux administrations and DevOps. I gained new skills through the training, both theoretically and practically. All of us benefited from the trainer's solidarity and amalgamation in order to learn new things.",
    imageURL:
      "https://static.wixstatic.com/media/165a91_f6dcd3a400754807bbec46cd763449d3~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image006.png",
  },
];

const awards = [
  {
    title: "Funded on Shark Tank India",
    description:
      "Revolutionizing Education with Shark Tank India Backed Innovation",
    imageURL: SharkTank,
  },
  {
    title: "Global student entrepreneur award winner",
    description:
      "Celebrating the Success of the Next Generation of Global Entrepreneurs",
    imageURL: GlobalStudent,
  },
  {
    title: "Awarded by Govt of Maharashtra",
    description:
      "A Distinguished EdTech Platform for Innovative  Learning Solutions",
    imageURL: GovMaharashtra,
  },

  {
    title: "Recoginzed by Education Ministry",
    description:
      "Empowering Students with Innovative Learning Solutions, Approved by the Education Ministry",
    imageURL: EducationMinistry,
  },
  {
    title: "Top startups award",
    description:
      "Recognizing the Best Innovative EdTech Startups Making a Difference in Education",
    imageURL: StartupsAward,
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };

const TestimonialSection = () => {
  return (
    <div className="w-full bg-secondary flex flex-col gap-10 items-center py-10 px-2 relative overflow-x-hidden">
      <div className="max-w-[1080px] w-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <RevealAnimation>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black">
              Testimonials
            </h3>
          </RevealAnimation>
          <RevealAnimation>
            <p className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              See what people think about us
            </p>
          </RevealAnimation>
        </div>

        <div className="w-full sm:max-w-xl">
          <Carousel
            plugins={[
              Autoplay({ playOnInit: true, delay: 3000 }),
              ClassNames({
                snapped: "snapped",
                inView: "inView",
              }),
            ]}
            opts={OPTIONS}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center gap-4  mt-2 ">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <RevealAnimation>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Awards and Accolades
          </h3>
        </RevealAnimation>
        <div className="w-full flex flex-wrap justify-center gap-4">
          {awards.map((award, i) => {
            return (
              <RevealAnimation key={award.title} simple delay={i * 0.1}>
                <div className="flex w-[300px] flex-col items-center gap-3 text-center">
                  <div className="h-10 sm:h-16 md:h-20 lg:h-24">
                    <img
                      src={award.imageURL}
                      alt={award.title}
                      className="h-full object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium">
                    {award.title}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    {award.description}
                  </p>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

interface Testimonial {
  name: string;
  company: string;
  review: string;
  imageURL: string;
}

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  company,
  review,
  imageURL,
}) => {
  return (
    <div className="bg-card border rounded-md p-4">
      <div className="flex items-center justify-between gap-4">
        <img
          className="w-12 rounded-full object-cover"
          src={imageURL}
          alt={`Profile Image ${name}`}
        />
        <div className="flex flex-col text-sm sm:text-base">
          <span>{name}</span>
          <span>{company}</span>
        </div>
      </div>
      <p className="text-sm sm:text-base line-clamp-4 text-foreground/80 mt-4">
        {review}
      </p>
    </div>
  );
};
