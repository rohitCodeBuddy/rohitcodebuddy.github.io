interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  firstName: string;
  lastName: string;
}

const Title: React.FC<TitleProps> = ({
  firstName,
  lastName,
  className,
  ...props
}) => (
  <div
    className={`flex flex-col gap-y-1 text-[var(--cl2)] text-right uppercase tracking-[0.5rem] font-semibold ${className}`}
    {...props}
  >
    <span className="text-sm">{firstName} </span>
    <span className="text-lg">{lastName} </span>
  </div>
);

export default Title;
