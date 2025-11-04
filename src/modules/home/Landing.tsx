import { Button } from "@/components/ui/button";
import Atat3D from "@/modules/3D/Atat3D";
import { handleNavClick } from "../../lib/utils";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Landing() {
  return (
    <div className="flex w-full flex-col max-w-4xl flex-1 px-4 mt-[100px] sm:px-6 lg:px-8">
      <section className="flex flex-col items-center gap-8 py-8" id="about">
        <Atat3D className="max-lg:max-w-[400px] max-lg:max-h-[400px] drop-shadow-xl drop-shadow-white/18" />

        <div className="flex w-full flex-col gap-8 items-center">
          <div className="flex flex-col gap-2 border border-bdr-dark backdrop-blur-[2px] px-10 py-6 rounded-lg shadow-lg">
            <p className="text-light dark:text-dark text-3xl font-bold leading-tight tracking-tighter">
              Beneath the Same Sky of Code
            </p>
            <p className="text-secondary-light dark:text-white/80 text-base font-normal leading-relaxed text-justify">
              Hi, I&apos;m Ibnu, a web developer who enjoys building clean, fast,
              and user-friendly websites. I work mostly with Next.js,
              TypeScript, and Tailwind CSS, focusing on creating interfaces that
              feel smooth and intuitive. I like learning new things,
              experimenting with different UI ideas, and making sure every
              project I build looks and feels right.
            </p>
          </div>
          <Button 
            variant={"default"}
            className="w-full max-w-lg"
            onClick={() => {
              handleNavClick("contact", -80)
            }}
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <Projects />
      <Contact />
    </div>
  );
}
