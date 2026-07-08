import physioNervioImg from "../assets/images/gallery-physio-nervio.png";
import christmasImg from "../assets/images/gallery-christmas.png";
import foundersDayImg from "../assets/images/news-founders-day.png";
import campPhotosImg from "../assets/images/gallery-camp.jpg";
import studentActivityImg from "../assets/images/gallery-student-activity.jpg";

export const galleryItems = [
  { 
    title: "PHYSIO NERVIO 2025", 
    slug: "physio-nervio-2025",
    coverImg: physioNervioImg,
    images: [physioNervioImg, christmasImg, foundersDayImg, campPhotosImg, studentActivityImg, physioNervioImg] 
  },
  { 
    title: "CHRISTMAS CELEBRATION 2025", 
    slug: "christmas-celebration-2025",
    coverImg: christmasImg,
    images: [christmasImg, physioNervioImg, studentActivityImg, foundersDayImg, campPhotosImg, christmasImg] 
  },
  { 
    title: "Founder's Day Celebration", 
    slug: "founders-day-celebration",
    coverImg: foundersDayImg,
    images: [foundersDayImg, physioNervioImg, campPhotosImg, studentActivityImg, christmasImg, foundersDayImg] 
  },
  { 
    title: "Physiotherapy Camp Photos", 
    slug: "physiotherapy-camp",
    coverImg: campPhotosImg,
    images: [campPhotosImg, christmasImg, foundersDayImg, physioNervioImg, studentActivityImg, campPhotosImg] 
  },
  { 
    title: "Student Activity", 
    slug: "student-activity",
    coverImg: studentActivityImg,
    images: [studentActivityImg, campPhotosImg, christmasImg, foundersDayImg, physioNervioImg, studentActivityImg] 
  },
];
