import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Herocarousel() {
  const [isHovered, setIsHovered] = useState(null);

  const projects = [
    {
      id: 1,
      size: "h-[320px] w-[320px] md:h-[240px] md:w-[240px]",
      image: "/assets/images/img1.jpg",
      path: "/planetglass",
    },
    {
      id: 2,
      size: "h-[280px] w-[280px] md:h-[300px] md:w-[300px]",
      image: "/assets/images/img2.jpg",
      path: "/planetglass",
    },
    {
      id: 3,
      size: "h-[90px] w-[90px] md:h-[160px] md:w-[160px]",
      image: "/assets/images/img3.jpg",
      path: "/planetglass",
    },
    {
      id: 4,
      size: "h-[120px] w-[120px] md:h-[260px] md:w-[260px]",
      image: "/assets/images/img4.jpg",
      path: "/planetglass",
    },
    {
      id: 5,
      size: "h-[180px] w-[180px] md:h-[220px] md:w-[220px]",
      image: "/assets/images/img5.jpg",
      path: "/planetglass",
    },
    {
      id: 6,
      size: "h-[90px] w-[90px] md:h-[160px] md:w-[160px]",
      image: "/assets/images/img1.jpg",
      path: "/planetglass",
    },
    {
      id: 7,
      size: "h-[120px] w-[120px] md:h-[260px] md:w-[260px]",
      image: "/assets/images/img2.jpg",
      path: "/planetglass",
    },
    {
      id: 8,
      size: "h-[180px] w-[180px] md:h-[220px] md:w-[220px]",
      image: "/assets/images/img3.jpg",
      path: "/planetglass",
    },
  ];

  return (
    <div className="w-full h-[50vh] flex items-center justify-center z-30">
      <Marquee speed={50} gradient={false} pauseOnHover pauseOnClick className="py-4">
        {projects.map((project, index) => (
          <Link href={project.path} key={`${project.id}-${index}`}>
            <div
              className={`${project.size} rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 hover:z-20 relative mx-2`}
              onMouseEnter={() => setIsHovered(project.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />

              {isHovered === project.id && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl z-10" />
              )}
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}