import { navLinks } from "@/app/constants/navLinks";
import Link from "next/link";

export function SideNavigation() {
  return (
    <div className="w-full flex flex-col">
      {
        navLinks.map(link => (
          <Link href={link.href}>
            <div className="p-2 px-4 text-gray-200 font-semibold hover:bg-indigo-500 duration-200 hover:pl-6">
              {link.label}
            </div>
          </Link>
        ))
      }
    </div>
  )
}