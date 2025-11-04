import { Button } from "@/components/ui/button";
import { cn, handleNavClick } from "../../lib/utils";
import Image from "next/image";

const headerData = [
  { title: "About", href: "#about", offset: -80 },
  { title: "Projects", href: "#projects", offset: -10 },
  { title: "Contact", href: "#contact", offset: -80 },
];

export default function Header() {
  return (
    <header className="sticky flex items-center justify-center w-full whitespace-nowrap border-b border-b-white/20 py-4 top-0 bg-transparent backdrop-blur-sm z-50">
      <div className="flex items-center w-full justify-between whitespace-nowrap max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="size-6 text-white">
            <Image width={500} height={500} src="/japan.png" alt="Ibnu Al Yazzar Logo" />
            {/* <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg> */}
          </div>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Ibnu Al Yazzar
          </h2>
        </div>
        <div className="flex flex-1 items-center justify-end gap-6">
          <nav className="hidden sm:flex items-center gap-4">
            {headerData.map((item, index) => (
              <div
                key={item.href + index}
                onClick={() => handleNavClick(item.href.slice(1), item.offset)}
                className="px-4 h-fit"
              >
                <Button
                  variant="link"
                  className={cn(
                    "relative overflow-hidden rounded-none p-0 hover:no-underline",
                    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5",
                    "after:w-full after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-left"
                  )}
                  style={{ display: "inline-block" }}
                >
                  {item.title}
                </Button>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
