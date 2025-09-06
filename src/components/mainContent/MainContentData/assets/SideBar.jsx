import ProfileImage from "../../../sidebar/ProfileImage.jsx";
import ProfileTitle from "../../../sidebar/ProfileTitle.jsx";
import ProfileLanguages from "../../../sidebar/ProfileLanguages.jsx";
import PastWork from "../../../sidebar/PastWork.jsx";

export default function SideBar() {
  return (
    <div className="h-screen w-86 bg-[#171618] shadow-lg text-white flex flex-col items-center fixed top-0 left-0">
      <ProfileImage />
      <ProfileTitle />
      <ProfileLanguages />
      <PastWork />
    </div>
  );
}
