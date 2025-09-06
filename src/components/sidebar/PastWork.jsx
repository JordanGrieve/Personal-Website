import { PAST_WORK } from "./SidebarData/PastWorkData";

export default function PastWork() {
  return (
    <div className="pt-10">
      {PAST_WORK.map((work, index) => (
        <div key={index} className="flex items-center gap-4 mb-6">
          {/* Logo */}
          <img
            src={work.image}
            alt={work.title}
            className="w-10 h-10 object-cover rounded-full"
          />

          {/* Text */}
          <div>
            <h2 className="text-sm text-gray-400">Shopify Frontend Developer</h2>
            <p className="italic text-gray-500">
              {work.title}{" "}
              <span className="text-xs">2025 - Now</span>
            </p>

          </div>
        </div>
      ))}
    </div>
  );
}
