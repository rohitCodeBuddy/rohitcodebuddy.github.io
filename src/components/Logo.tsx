import classNames from "classnames";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
}

const Logo: React.FC<LogoProps> = ({ username, className, ...props }) => {
  return (
    <div
      className={classNames(
        "border-4 border-white h-14 aspect-square rounded-full flex items-center justify-center relative",
        className
      )}
      {...props}
    >
      <span className="text-3xl text-white font-bold z-10 uppercase">
        {username[0]}
      </span>
      <span className="text-xs text-white font-bold absolute -right-1 bg-black uppercase">
        {username[0]}
      </span>
      <span className="text-md text-[var(--cl2)] font-bold absolute left-[calc(100%+1.5rem)] z-10 uppercase">
        {username}
      </span>
      <span className="h-[1px] w-[100px] absolute -rotate-45 bg-gradient-to-r from-black/90 via-[var(--cl3)] to-black/90"></span>
    </div>
  );
};

export default Logo;
