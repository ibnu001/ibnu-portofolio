import Atat3D from "@/components/3D/Atat3D";
import Kitten3D from "@/components/3D/Kitten3D";
import { handleNavClick } from "@/lib/utils";

const projectCardData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Tailwind CSS.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAstt0w9iD6y3purihPDcAJxiosVxi_Lrc3qleqlm4wqomjuWF9FzViJ8bq8ookEYVwgplRiSyAXELgF6b0-V9HUEyJMdlnhhndrypnh_MBfxjn9f7mIW_5CzDb_-mT6zYZY5_Grb2FDJ-lNVqc1KE6iMRI6rpG5W4BQiwCU-Z2GYRfHR9HFfPeoAbE_bEanAdiaJBaVtBBpfqIEdooSNvG3FrziRyL6YRn6ur7AJBM5i0qfRA99tSD6pnZhYmykaQgXbl5--Wdvb3e",
    techStack: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management app built with Vue.js and Firebase.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAW3udf9wGBUu9fQ2D2stSBWuDxTOXc_TROjUSFhAAKGWdL6kAZ5KwgJ8AM4pRdWzp5TK3qLtojg8lDR4QdDWvI5a2ihWmqC6xLyxP5lxbHvpNc0SYONxailP8JCpJ2NmPaPNrV8W5HcWq_03Hip_sJ_CHqjhjuwAx97orqXrel-pZskxqUci2DhxfwlFXVV0jB0-nC8HlZ9bWNGKkMamfJ1AlnMcgNtmB3lz-KyQ9ROGkYrH696ayQrc5sJ9pJsi6t27OvygthQSl",
    techStack: ["Vue.js", "Firebase"],
    link: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for analyzing and visualizing complex datasets.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD88d_q_IVeeM_lrqyy0IjUdwtGinOobZp5SQ6lX6LIhpdAa3tCnOSNvq_u4Ozp4b9q48mmlxTxLzwR7LoBCwO-nvDjdx8rSTXW54FdL311EXgNxJ6c7Iuf1iEeWYVM5Ct3q2jnS6QsxjQxrwVgu0kC4v9o-quHqyBbxT68beBBcQmF9teP4Xz5-M_hFWVmSPY3PUyCrJXg58vhouCGodbs6uzQSbbiqLgc3-AsuO7U5mFmLWj_baLI4sRX_PlP0vWXm9GvkRnlkyIC",
    techStack: ["D3.js", "React"],
    link: "#",
  },
];

export default function Landing() {
  return (
    <div className="flex w-full flex-col max-w-4xl flex-1 px-4 mt-[100px] sm:px-6 lg:px-8">
      <section
        className="flex flex-col items-center gap-8 py-8 @container"
        id="about"
      >
        <div className="flex w-full flex-col gap-8 text-center ">
          <div className="flex flex-col gap-2 border border-bdr-dark backdrop-blur-[2px] px-10 py-6 rounded-lg shadow-lg items-center">
            <p className="text-light dark:text-dark text-3xl font-bold leading-tight tracking-tighter">
              Beneath the Same Sky of Code
            </p>
            <p className="text-secondary-light dark:text-white/80 text-base text-jus font-normal leading-relaxed max-w-md">
              Somewhere between logic and imagination, creation happens. The
              screen becomes a galaxy of pixels, each one part of a larger
              constellation of ideas. Building for the web is like exploring
              space: infinite, uncertain, and endlessly inspiring.
            </p>
          </div>
          <a
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-dark text-light text-sm font-bold leading-normal tracking-[0.015em] w-full @[480px]:w-auto hover:bg-primary-dark transition-colors shadow-md"
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact", -80)}
          >
            <span className="truncate">Get In Touch</span>
          </a>
        </div>
      </section>
      <section className="py-12 sm:py-16" id="projects">
        <h2 className="text-light dark:text-dark text-2xl font-bold leading-tight tracking-tighter pb-6 pt-5">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCardData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 rounded-xl bg-transparent border border-bdr-light dark:border-bdr-dark p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-[2px]"
            >
              <>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  data-alt="Abstract gradient representing the project's visual identity"
                  style={{
                    backgroundImage: `url("${project.imageUrl}")`,
                  }}
                ></div>
                <div className="flex flex-col gap-3">
                  <p className="text-light dark:text-dark text-lg font-bold leading-normal">
                    {project.title}
                  </p>
                  <p className="text-secondary-light dark:text-secondary-dark text-sm font-normal leading-normal flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={tech + index}
                        className="text-xs font-medium bg-primary/20 text-primary dark:bg-primary-dark/20 dark:text-primary-dark rounded-full px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
              <a
                className="flex mt-2 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-background-dark text-light dark:text-dark hover:dark:text-primary text-sm font-bold leading-normal tracking-[0.015em] border border-bdr-light dark:border-bdr-dark hover:bg-primary/80 dark:hover:bg-primary-dark transition-colors"
                href={project.link}
              >
                <span className="material-symbols-outlined text-base">
                  link
                </span>
                <span className="truncate">View on GitHub</span>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section className="py-12 sm:py-16 text-center" id="contact">
        <h4 className="text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] pb-3">
          Let&apos;s Connect
        </h4>
        <p className="text-light dark:text-dark text-3xl font-bold leading-tight tracking-tighter mb-2">
          Interested in collaborating?
        </p>
        <p className="text-secondary-light dark:text-white/80 text-base font-normal leading-relaxed max-w-lg mx-auto mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out.
        </p>
        <div className="flex justify-center items-center gap-6">
          <a
            className="text-secondary-light dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            href="mailto:email@example.com"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="text-secondary-light dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            href="#"
          >
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            className="text-secondary-light dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            href="#"
          >
            <svg
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
