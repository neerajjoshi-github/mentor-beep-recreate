import { motion } from "framer-motion";

interface RevealAnimationProps {
  children: React.ReactNode;
  delay?: number;
  from?: "top" | "left";
  simple?: boolean;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  delay = 0,
  from = "left",
  simple = false,
}) => {
  return (
    <div className="h-fit w-fit overflow-hidden relative">
      <motion.div
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 10,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          delay,
        }}
        viewport={{
          once: true,
          margin: "-50px",
        }}
      >
        {children}
      </motion.div>
      {!simple && (
        <motion.div
          whileInView={{
            [from]: "100%",
          }}
          style={{
            top: 0,
            left: 0,
          }}
          transition={{
            duration: 0.35,
            delay,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          className="absolute w-full h-full bg-primary"
        ></motion.div>
      )}
    </div>
  );
};

export default RevealAnimation;
