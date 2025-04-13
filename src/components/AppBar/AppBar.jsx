import { useSelector } from "react-redux";
import { selectIsLoggegIn } from "../../redux/auth/selectors";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggegIn);
  return (
    <header>
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>}
    </header>
  );
}
