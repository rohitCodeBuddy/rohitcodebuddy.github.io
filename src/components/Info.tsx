import classNames from "classnames";

interface InfoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Info: React.FC<InfoProps> = ({ className, ...props }) => (
  <div
    className={classNames("text-white uppercase tracking-widest", className)}
    {...props}
  >
    <p className="text-lg font-bold ">full stack developer </p>
    <p className="text-md font-semibold">
      from <span className="text-[var(--cl2)]">IN</span>
    </p>
  </div>
);

export default Info;
