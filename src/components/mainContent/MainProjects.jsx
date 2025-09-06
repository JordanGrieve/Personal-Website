// components/mainContent/MainProjects.jsx
import { TIMELINE } from "./MainContentData/MainContentData.js";
import Modal from "../modal/Modal.jsx";
import {SiFigma, SiJavascript, SiNodedotjs, SiPhp, SiPython, SiReact} from "react-icons/si";

export default function MainProject() {
    const tagColors = {
      Frontend: "bg-purple-600",
      Backend: "bg-teal-500",
      Design: "bg-pink-500",
       FullStack: "bg-indigo-600"
    };

const ICONS = {
  react: <SiReact className="text-sky-400 w-10 h-10" />,
  figma: <SiFigma className="text-pink-500 w-10 h-10" />,
  node: <SiNodedotjs className="text-green-500 w-10 h-10" />,
    php: <SiPhp className="text-purple-500 w-10 h-10" />,
    python: <SiPython className="text-yellow-500 w-8 h-8" />,
    javascript: <SiJavascript className="text-yellow-300 w-10 h-10" />
};

  return (
    <div className="flex-1 p-10 text-white">
      {TIMELINE.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-sm text-gray-400 flex items-center gap-2 mb-4">
            {section.date}
            <span className="flex-1 border-t border-gray-700"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {section.projects.map((proj, j) => {
              const modalId = `project_${i}_${j}`;

              return (
                <div key={j} className="relative">
                  {/* Card = opener */}
                  <label
                    htmlFor={modalId}
                    className="block border border-[#09090B] rounded-lg p-4 bg-[#17161870]
                               shadow-md cursor-pointer hover:border-[#DCA54D] hover:shadow-lg
                               hover:-translate-y-0.5 transition flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{proj.title}</h3>
                      <div className="flex gap-2 mt-2">
                       {proj.tags.map((tag, t) => (
                          <span
                            key={t}
                            className={`text-xs mt-1 px-2 py-1 rounded-full ${tagColors[tag] || "bg-gray-600"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {proj.logo && (
                          ICONS[proj.logo] || <img src={proj.logo} alt={proj.title} className="w-16 h-16" />
                        )}
                  </label>

                  {/* Modal for this card */}
                  <Modal id={modalId}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{proj.title}</h3>
                        {proj.details?.period && (
                          <p className="text-xs text-gray-400 mt-1">{proj.details.period}</p>
                        )}
                      </div>
                       {proj.logo && (
                          ICONS[proj.logo] || <img src={proj.logo} alt={proj.title} className="w-16 h-16" />
                        )}
                    </div>

                   <div className="mt-2 flex flex-wrap gap-2">
                      {proj.techStack.map((t, k) => (
                        <span
                          key={k}
                          className="text-xs px-2 py-1 rounded-full text-black font-medium"
                          style={{ backgroundColor: t.color }}
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>


                 {proj.links?.length > 0 && (
                      <>
                        <p className="mt-4 text-sm text-gray-400">Links</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {proj.links.map(({ label, href, color }, k) => (
                            <a
                              key={k}
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-md px-3 py-1 text-sm font-medium text-white hover:opacity-80 transition"
                              style={{ backgroundColor: color }}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      </>
                    )}


                    {proj.description && (
                      <>
                        <p className="mt-4 text-sm text-gray-400">Description</p>
                        <p className="mt-2 text-sm leading-6 text-gray-200">{proj.description}</p>
                      </>
                    )}

                    {proj.details?.features?.length > 0 && (
                      <>
                        <p className="mt-4 text-sm text-gray-400">Key Features</p>
                        <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-1">
                          {proj.details.features.map((f, k) => <li key={k}>{f}</li>)}
                        </ul>
                      </>
                    )}

                    {proj.images?.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {proj.images.map((src, k) => (
                          <img key={k} src={src} alt="" className="rounded-lg border border-white/10" />
                        ))}
                      </div>
                    )}
                  </Modal>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
