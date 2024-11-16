import { SchoolMentorSlider } from "./SchoolMentorSlider";

export const InstructorSlider = () => {
  return (
    <div>
      <div className="text-center flex flex-col mt-20 gap-2">
        <h1 className="font-extrabold text-lg md:text-4xl">
          Meet Your Instructors
        </h1>
        <p className="text-zinc-600">
          The Curriculum Team is a group of instructors with extensive industry
          and training experience in some of India’s top companies.
        </p>
      </div>
      <SchoolMentorSlider />
    </div>
  );
};
