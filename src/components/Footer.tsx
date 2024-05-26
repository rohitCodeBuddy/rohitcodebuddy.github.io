import classNames from "classnames";
import Info from "./Info";
import Social from "./Social";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({
  className,

  ...props
}) => (
  <footer
    className={classNames(
      "absolute left-0 bottom-0 flex w-full items-end px-4 pb-4",
      className
    )}
    {...props}
  >
    <Info className="flex-1" />
    <Social className="flex-1" />
  </footer>
);

export default Footer;
