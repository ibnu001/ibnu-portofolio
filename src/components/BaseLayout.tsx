import { cn } from "@/lib/utils";

export default function BaseLayout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div 
      className={cn(`
        mx-auto 
        w-full 
        max-w-7xl               /* batas lebar agar konten tidak terlalu melebar di layar besar */
        px-4 sm:px-6 lg:px-8    /* padding horizontal: mobile 16px, tablet 24px, desktop 32px */
        min-h-screen            /* biar penuh 1 layar */
      `, className)}
    >
      {children}
    </div>
  )  
}