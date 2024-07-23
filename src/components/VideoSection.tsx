import RevealAnimation from "./RevealAnimation";

const VideoSection = () => {
  return (
    <div className="bg-background py-10 flex flex-col gap-8 items-center px-4 md:px-6">
      <video autoPlay loop muted className=" h-[80vh] object-cover rounded-lg">
        <source src="/shark-tank.mp4" type="video/mp4"></source>
      </video>

      <div className="flex flex-col items-center gap-5">
        <RevealAnimation>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center">
            As Seen On <span className="text-[#1975a4]">Shark Tank</span>{" "}
            <span className="text-[#fcdf6d]">India</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.1}>
          <p className="text-sm md:text-base font-semibold lg:text-xl">
            MentorBeep, a brand of{" "}
            <a href="" className="underline">
              EventBeep
            </a>
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-foreground/80 text-xs md:text-sm lg:text-lg max-w-[1080px] text-center">
            Join the revolution in college education with MentorBeep, as seen on
            Shark Tank and backed by industry leaders Ashneer Grover, Aman
            Gupta, and Peyush Bansal.
          </p>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default VideoSection;
