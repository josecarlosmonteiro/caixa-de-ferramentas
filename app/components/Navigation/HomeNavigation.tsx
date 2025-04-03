import { navLinks } from "@/app/constants/navLinks";
import Link from "next/link";

export function HomeNavigation() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        navLinks.map(link => (
          <Link key={link.href.toString()} href={link.href}>
            <div className="p-4 rounded shadow bg-gray-100">
              <strong className="text-lg text-primary">{link.label}</strong>
            </div>
          </Link>
        ))
      }
    </div>
  )
}