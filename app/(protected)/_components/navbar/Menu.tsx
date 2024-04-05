



"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoCallSharp } from "react-icons/io5"
import { TiThMenu } from "react-icons/ti"



const MenuLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-sm font-semibold mt-4 ml-[-2px] ${pathname === href ? "text-[#FFC52C]" : "text-white"} hover:text-[#FFD700]`}
    >
      {children}
    </Link>
  );
};

const menuItems = [
  { href: "/courses", label: "Utbildningar" },
  { href: "/blogs", label: "Bloggar" },
  { href: "/about", label: "Om Tayo" },
];

export function MenuItems() {
  
  return (
    <div className="w-full md:w-auto py-2 shadow-sm cursor-pointer md:flex justify-end items-center font-montserrat">
    <Sheet>
      <SheetTrigger asChild >
        <div className="sxl:hidden xl:hidden lg:hidden md:py-1 md:px-2 color-white flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition justify-end">
          <TiThMenu color="white" />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between items-start sm:items-start">
  <div>
    {menuItems.map((menu) => (
      <SheetFooter key={menu.href}>
          <MenuLink href={menu.href}>
        <SheetClose asChild>
        <SheetTitle className="text-white hover:text-[#FFD700]">
        {menu.label}

        </SheetTitle>
        </SheetClose>
          </MenuLink>
      </SheetFooter>
    ))}
  </div>
  <div>
  <SheetClose asChild>
        <Button className='bg-[#FFC52C] rounded-lg gap-2 text-black font-montserrat hover:text-white hover:bg-blue-500'>
      <IoCallSharp />
      <Link href="tel: 0736269711">
      070707707
      </Link>
    </Button>
  </SheetClose>

  </div>
</SheetContent>
    </Sheet>
    <div className="hidden lg:flex gap-x-8">
      {menuItems.map(menu => (
        <MenuLink key={menu.href} href={menu.href}>
          {menu.label}
        </MenuLink>
      ))}
      <Button className='bg-[#FFC52C] sm:ml-2 rounded-lg gap-2 text-black font-montserrat hover:text-white hover:bg-blue-500'>
        <IoCallSharp />
        070707707
      </Button>
    </div>
  </div>
  )
}
