import classNames from "classnames";
import { Icon } from "@iconify/react";

interface InfoProps extends React.HTMLAttributes<HTMLDivElement> {}

const ICONS = [
  {
    label: "twitter",
    icon: "mdi-twitter",
  },
  {
    label: "twitch",
    icon: "mdi-twitch",
  },
  {
    label: "facebook",
    icon: "mdi-facebook",
  },
  {
    label: "linkedin",
    icon: "mdi-linkedin",
  },
];

const Social: React.FC<InfoProps> = ({ className, ...props }) => (
  <div
    className={classNames(
      "flex text-white items-center justify-end gap-x-3 social-icons",
      className
    )}
    {...props}
  >
    {ICONS.map((icon) => (
      <Icon icon={icon.icon} key={icon.label} fontSize={22} />
    ))}
  </div>
);

export default Social;
