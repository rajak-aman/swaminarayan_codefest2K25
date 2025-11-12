import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ to, children, className }: NavLinkProps) => {
  return (
    <Link to={to} className={cn("inline-block", className)}>
      {children}
    </Link>
  );
};
