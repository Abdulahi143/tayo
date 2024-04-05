import Container from "@/app/components/Container";
import Logo from "./Logo";
import { MenuItems } from "./Menu";
// import UserMenu from "./UserMenu";

interface NavbarProps {
  // currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = () => {
  const navbarClasses = "fixed bg-[#010922] top-0 w-full z-20 shadow-sm";

  // if (!currentUser) {
    // Handle the case where currentUser is null
    return (
      <div className={navbarClasses}>
        <div className="py-4 border-b-[1px] border-[#FFC52C]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <MenuItems />
              {/* <UserMenu /> */}
            </div>
          </Container>
        </div>
      </div>
    );
  // }

  // Handle the case where currentUser is not null
  return (
    <div className={navbarClasses}>
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <MenuItems />
            {/* <UserMenu  /> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;