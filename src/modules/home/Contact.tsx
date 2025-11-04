import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

type SocialItem = {
  label: string;
  url: string;
  icon: React.ReactNode;
};

const socialLinks: SocialItem[] = [
  {
    label: "GitHub",
    url: "https://github.com/ibnu001",
    icon: <AiFillGithub className="w-7 h-7" />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammadibnualyazzar/",
    icon: <FaLinkedin className="w-7 h-7" />,
  },
];

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 text-center" id="contact">
      <h4 className="text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] pb-3">
        Let&apos;s Connect
      </h4>
      <p className="text-light dark:text-dark text-3xl font-bold leading-tight tracking-tighter mb-2">
        Creating with Intention
      </p>
      <p className="text-secondary-light dark:text-white/80 text-base font-normal leading-relaxed max-w-lg mx-auto mb-8">
        Every project is a space to experiment, refine, and express ideas
        through visuals and interaction.
      </p>
      <div className="flex justify-center items-center gap-6">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/90 transition-all"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
