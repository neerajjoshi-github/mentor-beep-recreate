import Icon from "./Icon";
import { useRef } from "react";
import {
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const translateY = useTransform(x, [0, 1], [40, 20]);
  const y = useTransform(x, [0, 1], [0, 20]);
  const transform = useMotionTemplate`translate(-50%, ${translateY}%)`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!ref.current) return;
    const scrollHeight = document.body.scrollHeight;
    if (scrollHeight - latest < innerHeight) {
      const remaining = scrollHeight - latest;
      const heigthExceptFooter = window.innerHeight - ref.current.offsetHeight;
      const scrollValue =
        (remaining - heigthExceptFooter) / ref.current.offsetHeight;
      console.log({ scrollValue }, translateY.get());
      x.set(scrollValue);
    }
  });
  // Give margin bottom with same value in the above container i.e Media Presence
  return (
    <footer
      ref={ref}
      className="-z-[50] fixed bottom-0 w-full bg-foreground text-background h-[60vh] p-6"
    >
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto text-background/80">
        <motion.div style={{ y }} className="flex gap-4 items-center h-fit">
          <img src="/logo.png" alt="" className="h-14 aspect-square" />
          <span className="text-3xl font-bold">MentroBeep</span>
        </motion.div>
        <motion.div style={{ y }} className="flex flex-col gap-6">
          <div>
            <p className="text-base lg:text-lg">Get in thouch</p>
            <p className="text-2xl lg:text-3xl font-bold">
              contact@mentorbeep.com
            </p>
            <p className="text-2xl lg:text-3xl font-bold">+91-9322160558</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base lg:text-lg">Address</p>
            <p className="text-sm lg:text-base">
              EventBeep Technoservies Private Limited, 3rd Floor, Royal Empress,
              Baner - Mahalunge Rd, Baner, Pune, Maharashtra 411045
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="linkedin" link="" />
            <Icon name="facebook" link="" />
            <Icon name="instagram" link="" />
          </div>
        </motion.div>
      </div>
      <motion.div
        style={{
          left: "50%",
          transform,
          bottom: 0,
        }}
        className="pointer-events-none select-none absolute text-[11vw] whitespace-nowrap text-center font-black text-background/10"
      >
        GROW WITH US
      </motion.div>
    </footer>
  );
};

export default Footer;
