import classNames from "classnames";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
}

const Content: React.FC<ContentProps> = ({ className, show, ...props }) => (
  <div
    className={classNames(
      "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md bg-black/50 w-[80%] h-[80%] backdrop-blur-sm shadow-sm transition-all duration-500",
      !show && "-z-[1] opacity-0",
      className
    )}
    {...props}
  ></div>
);

export default Content;
