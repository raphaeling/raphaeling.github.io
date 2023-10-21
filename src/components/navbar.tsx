import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/utils/nav-items";

export default function NavBar(): JSX.Element {
  const currentPage = usePathname();
  return (
    <ul className="absolute right-10 max-w-lg text-right text-dark font-display font-thin text-2xl">
      {navItems.map((item, index) => (
        <li key={index} className={`${"hover:text-light " + (item.url === currentPage ? "text-light font-bold" : "")}`}>
          <Link href={`${item.url}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
