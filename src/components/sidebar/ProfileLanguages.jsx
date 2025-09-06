import { SiReact, SiPython, SiFigma, SiMongodb, SiTailwindcss, SiNodedotjs, SiSwagger } from "react-icons/si";

export default function ProfileLanguages() {
  return (
    <div className="mt-4 flex items-center gap-3 text-xl text-white/80">
      <SiReact className="text-[#61DAFB] opacity-100" />
      <SiPython className="text-yellow-500 opacity-100" />
      <SiFigma className="text-pink-500 opacity-100" />
      <SiSwagger className="text-[#85EA2D] opacity-80" />
      <SiMongodb className="text-[#47A248] opacity-100" />
      <SiTailwindcss className="text-[#06B6D4] opacity-100" />
      <SiNodedotjs className="text-green-500 opacity-100" />
    </div>
  );
}