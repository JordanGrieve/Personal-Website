import ProfileImageFile from "/src/assets/Profile-Image.jpg"

export default function ProfileImage() {
    return (
        <div className="avatar">
            <div className="w-60 h-60 rounded mt-10 overflow-hidden">
                <img src={ProfileImageFile} alt="Profile"/>
            </div>
        </div>
    );
}