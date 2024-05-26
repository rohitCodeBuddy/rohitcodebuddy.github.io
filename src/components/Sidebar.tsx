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
      "absolute top-1/2 -translate-y-1/2 right-0 w-16 flex flex-col justify-center gap-y-[100px] items-center select-none h-[calc(min(60dvh,500px))] overflow-auto py-4 scrollbar-none",
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
          "uppercase text-white font-bold text-sm vertical-text transition-colors duration-500",
          selected === option && "text-[var(--cl2)]"
        )}
      >
        {option}
      </button>
    ))}
  </aside>
);

export default Sidebar;
