import { Badge } from "@/components/ui/badge";
import { projectCardData } from "./projectsData";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="py-12 sm:py-16" id="projects">
      <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-tighter pb-6 pt-5">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectCardData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-4 rounded-xl bg-transparent border border-white/20 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-[2px]"
          >
            <div className="flex flex-col gap-2">
              <Image
                width={500}
                height={300}
                src={project.imageUrl}
                alt={project.title}
                className="w-full aspect-14/9 object-cover rounded-lg border border-white/20"
              />
              <div className="flex flex-col gap-3">
                <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal">
                  {project.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={tech + index}
                      variant={"default"}
                      className="text-xs font-medium bg-transparent text-white border border-white/20 hover:bg-white/10 rounded-full px-2.5 py-1 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.status && (
                  <Badge
                    variant={"default"}
                    className="w-fit px-2 py-1 text-xs font-medium mt-2 cursor-default"
                  >
                    {project.status}
                  </Badge>
                )}
              </div>
            </div>
            <Button
              variant={"outline"}
              className="uppercase mt-4"
              onClick={() =>
                window.open(project.link, "_blank", "noopener noreferrer")
              }
            >
              {project.btnText || "View Project"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
