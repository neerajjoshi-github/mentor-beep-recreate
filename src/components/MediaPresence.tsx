import { Button } from "./ui/button";
import Marquee from "./ui/marquee";

import AajTak from "../assets/news/aaj-tak.png";
import HindustanTimes from "../assets/news/hindustan-times.png";
import IndianExpress from "../assets/news/inidan-express.png";
import Inshort from "../assets/news/inshorts.png";
import M from "../assets/news/m.png";
import News18 from "../assets/news/news18.png";
import ScoopWhoop from "../assets/news/scoop-whoop.png";
import TimesNow from "../assets/news/times-now.png";
import YourStory from "../assets/news/yourstory.png";

import Scholorship from "../assets/applyCards/1.jpg";
import Waitlist from "../assets/applyCards/2.jpg";
import WoWomen from "../assets/applyCards/3.jpg";
import RevealAnimation from "./RevealAnimation";

const cards = [
  {
    title: "Scholarships",
    description:
      "We offer scholarships of up to 50% to the right and deserving candidates. No student gets left behind!",
    imageURL: Scholorship,
  },
  {
    title: "Waitlist",
    description:
      "All programs have limited seats, apply for waitlist, we will notify you once we have openings.",
    imageURL: Waitlist,
  },
  {
    title: "WoWoman",
    description:
      "We're an organisation that celebrates and recognises the contribution of women! We got special 'World of Women (WoW)' scholarships for you!",
    imageURL: WoWomen,
  },
];

const medias = [
  {
    name: "aaj-tak",
    imageURL: AajTak,
  },
  {
    name: "hindustan-times",
    imageURL: HindustanTimes,
  },
  {
    name: "indian-express",
    imageURL: IndianExpress,
  },
  {
    name: "inshort",
    imageURL: Inshort,
  },
  {
    name: "m",
    imageURL: M,
  },
  {
    name: "news18",
    imageURL: News18,
  },
  {
    name: "scoop-whoop",
    imageURL: ScoopWhoop,
  },
  {
    name: "times-now",
    imageURL: TimesNow,
  },
  {
    name: "yourstory",
    imageURL: YourStory,
  },
];

const MediaPresence = () => {
  return (
    <div className="relative bg-background w-full flex flex-col gap-10 items-center py-10  mb-[60vh]">
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 px-4">
        {cards.map((card) => {
          return (
            <div
              key={card.title}
              className="group flex flex-col gap-4 h-96 bg-[#00353b] rounded-lg p-6 text-white relative overflow-hidden"
            >
              <div className="max-w-max bg-white rounded-md text-black font-medium p-2">
                Beginner
              </div>
              <p className="text-3xl font-bold">{card.title}</p>
              <p className="font-medium mt-6 z-[1]">{card.description}</p>
              <img
                className="group-hover:grayscale-0 transition duration-300 grayscale absolute translate-x-[30%] translate-y-[30%]  bottom-0 right-0  w-56 aspect-square rounded-full object-cover"
                src={card.imageURL}
                alt={card.title}
              />
              <Button
                className="mt-auto max-w-max bg-green-600 hover:bg-green-700"
                size="lg"
              >
                Apply
              </Button>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <RevealAnimation>
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Our Media Pressence
          </h3>
        </RevealAnimation>
        <Marquee reverse className="bg-secondary">
          {medias.map((media) => (
            <div key={media.name} className="h-10 md:h-14 mx-5 md:mx-10">
              <img
                src={media.imageURL}
                alt={media.name}
                className="h-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MediaPresence;
