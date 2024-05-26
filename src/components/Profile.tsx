import classNames from "classnames";
import ninjaImg from "../assets/images/ninja.png";

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {}

const Profile: React.FC<ProfileProps> = ({ className, ...props }) => (
  <div
    className={classNames(
      "grid place-content-center px-4 absolute inset-0 select-none",
      className
    )}
    {...props}
  >
    <div
      className={
        "profile-card aspect-square w-[min(70dvw,400px)] rounded-full relative bg-black"
      }
    >
      <img
        src={ninjaImg}
        className="absolute inset-0 object-contain"
        draggable={false}
        alt="eldrago"
      />
      <div className="bg-gradient-to-b from-black/90 to-black/90 absolute -bottom-1/2 h-1/2 border w-full blur-xl"></div>
    </div>
  </div>
);

export default Profile;
