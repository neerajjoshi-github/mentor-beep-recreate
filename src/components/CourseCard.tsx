import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface Course {
  title: string;
  price: string;
  duration: string;
  eligibility?: string;
  semester?: string;
  schedule?: string[];
  features: string[];
  imageUrl: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.25,
      }}
      className="w-[350px] rounded-md bg-card overflow-hidden flex flex-col border-2"
    >
      <div className="w-full h-40">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 py-4 flex flex-col gap-6 justify-between flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            {course.title}
          </p>
          <p className="text-sm lg:text-base font-medium">
            Duration : {course.duration}
          </p>
          {course.features.map((feature, i) => {
            return (
              <p key={i} className="text-sm lg:text-base">
                {feature}
              </p>
            );
          })}

          {course.eligibility && (
            <p className="text-sm lg:text-base">
              Eligibility : {course.eligibility}
            </p>
          )}
          {course.semester && (
            <p className="text-sm lg:text-base">Semester : {course.semester}</p>
          )}
          {course.schedule && (
            <p className="text-sm lg:text-base">
              Schedule : {course.schedule.join(" | ")}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{course.price}</span>
          <Button>View Program</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
