import classNames from "classnames";
import Logo from "./Logo";
import Title from "./Title";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
  firstName: string;
  lastName: string;
}

const Header: React.FC<HeaderProps> = ({
  username,
  firstName,
  lastName,
  className,
  ...props
}) => (
  <header
    className={classNames("flex justify-between p-4", className)}
    {...props}
  >
    <Logo username={username} />
    <Title firstName={firstName} lastName={lastName} />
  </header>
);

export default Header;
