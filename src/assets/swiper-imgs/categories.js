import { School, CollegeCourseData, OtherCourseData } from "../../Data";

// Correctly define the object with `const`
export const categories = {
  "School Courses": School[0].subCate,
  "College Courses": CollegeCourseData[0].subCate,
  "Degree Courses": OtherCourseData[0].subCate,
};