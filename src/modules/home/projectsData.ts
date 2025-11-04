
interface Projects {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string;
  status?: string;
  btnText: string;
}

export const projectCardData: Projects[] = [
  {
    title: "AI Chatting Platform",
    description:
      "A real-time AI chatting platform built with Next.js, React, and shadcn/ui. It allows users to interact seamlessly with an AI assistant through a modern and responsive interface.",
    imageUrl: "/screenshot/ai-chatting-project.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "https://ibnu-ai-chatbot.vercel.app/",
    btnText: "View Live Demo",
  },
  {
    title: "Solid LandPlate",
    description:
      "A project for all template landing page built using SolidJS framework with TypeScript and Tailwind CSS for styling.",
    imageUrl:
      "/screenshot/ai-multi-color.jpg",
    techStack: [
      "SolidStart",
      "SolidJS",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn Solid",
    ],
    link: "https://solid-landplate.vercel.app/",
    status: "In Progress",
    btnText: "View Live Demo",
  },
];