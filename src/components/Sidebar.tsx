import classNames from "classnames";

interface SidebarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  onClick(option: string): void;
  options: string[];
  selected?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  onClick,
  options,
  selected,
  ...props
}) => (
  <aside
    className={classNames(
      "absolute top-1/2 -translate-y-1/2 right-0",
      "flex flex-col justify-around gap-y-[100px] items-center",
      "w-16 h-[min(60dvh,400px)] overflow-auto scrollbar-none",
      className
    )}
    {...props}
  >
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onClick(option)}
        className={classNames(
          "uppercase text-white font-bold text-sm rotate-90 transition-colors duration-500",
          selected === option && "text-[var(--cl2)]"
        )}
      >
        {option}
      </button>
    ))}
  </aside>
);

export default Sidebar;
