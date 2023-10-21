import Link from "next/link";
import { usePathname } from "next/navigation";

// export interface NavBarProps {
//   readonly currentPage: string;
// }

export default function NavBar(): JSX.Element {
  const currentPage = usePathname();
  return (
    <ul className="md:flex max-w-lg justify-between text-light font-display font-thin text-2xl">
      <li>
        <Link href="/" className={currentPage === "#about" ? "font-bold" : ""}>about</Link>
      </li>
      <li>
        <Link href="/" className={currentPage === "#experience" ? "font-bold" : ""}>experience</Link>
      </li>
      <li>
        <Link href="/" className={currentPage === "#skills" ? "font-bold" : ""}>skills</Link>
      </li>
      <li>
        <Link href="/" className={currentPage === "#projects" ? "font-bold" : ""}>projects</Link>
      </li>
    </ul>
  );
}
