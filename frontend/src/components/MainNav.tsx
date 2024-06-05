import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const {loginWithRedirect} = useAuth0()

  return(
    <Button variant={"ghost"} className="font-bold hover:bg-orange-500 hover:text-white" onClick={async ()=> await loginWithRedirect()}>
        Log In

    </Button>
  )
}

export default MainNav;