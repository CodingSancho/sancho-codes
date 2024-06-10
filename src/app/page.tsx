import SocialLinks from "@/components/socialLinks";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-100 p-4">
      <div className="absolute top-4 left-4 text-3xl font-bold">
        Sancho.dev
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          Web Developer
        </div>
        <div className="scroll-m-20 text-2xl tracking-tight mb-2">
          Hi, I am Sancho. Sancho is hungry.
        </div>
        <SocialLinks />
        <Skills />
        
      </div>
    </main>
  );
}
