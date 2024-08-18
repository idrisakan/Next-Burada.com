import CardCount from "./CardCount";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap px-3 md:px-10 bg-orange-600 h-16 text-slate-200">
      <Logo />
      <Search />
      <CardCount />
      <User />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
