import Link from "next/link";
import { usePathname } from "next/navigation";

// export interface NavBarProps {
//   readonly currentPage: string;
// }

export default function NavBar(): JSX.Element {
  const currentPage = usePathname();
  return (
    <ul className="absolute bottom-0 right-10 max-w-lg text-right text-light font-display font-thin text-2xl">
      <li>
        <Link href="/" className={currentPage === "/about" || currentPage === "/" ? "font-extrabold" : "" }>about</Link>
      </li>
      <li>
        <Link href="/" className={currentPage === "/experience" ? "font-extrabold" : ""}>experience</Link>
      </li>
      <li>
        <Link href="/" className={currentPage === "/skills" ? "font-extrabold" : ""}>skills</Link>
      </li>
      <li>
        <Link href="/" className={currentPage === "/projects" ? "font-extrabold" : ""}>projects</Link>
      </li>
    </ul>
  );
}
