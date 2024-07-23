import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import { categorizedCourses } from "@/data/courses";
import { motion } from "framer-motion";
import { useState } from "react";

type Tab = "jobs" | "internship" | "ui-ux" | "online-degree";

const ProgramsSections = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("jobs");
  return (
    <div className="relative w-full bg-secondary flex flex-col items-center py-10 overflow-hidden">
      <div className="z-[1] max-w-[1280px] w-full flex flex-col gap-10 items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ">
          Our Programs
        </h2>
        <div className="w-full">
          <Tabs
            onValueChange={(tab) => setSelectedTab(tab as Tab)}
            defaultValue="jobs"
            className="w-full flex flex-col items-center"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4  bg-primary h-auto gap-4 md:gap-6 lg:gap-10 mb-6">
              {categorizedCourses.map((course) => (
                <TabsTrigger
                  key={course.value}
                  className="relative text-sm md:text-base lg:text-lg text-background/80 hover:text-background transition"
                  value={course.value}
                >
                  {selectedTab === course.value && (
                    <motion.div
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      layoutId="background"
                      className="w-full bg-background absolute top-0 left-0 h-full z-[1] rounded-md"
                    />
                  )}
                  <span className="z-[2]">{course.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categorizedCourses.map((category) => {
              return (
                <TabsContent
                  className="flex flex-wrap justify-center gap-6"
                  key={category.value}
                  value={category.value}
                >
                  {category.courses.map((course, i) => {
                    return (
                      <CourseCard
                        key={course.title}
                        index={i}
                        course={course}
                      />
                    );
                  })}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSections;
