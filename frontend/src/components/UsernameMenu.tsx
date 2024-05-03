import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
const UsernameMenu = ()=>{
    const { user, logout } = useAuth0();
    return(
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-black-500 gap-2">
            <CircleUserRound className="text-black-500"/>
            {user?.email}

        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem>
                <Link to="/manage-restaurant" className="font-bold hover:text-black-500">
                Manage Restaurant
            </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                <Link to="/user-profile" className="font-bold hover:text-black-500">
                User Profile
            </Link>
                </DropdownMenuItem>
               <Separator/>
               <DropdownMenuItem>
                  <Button onClick={()=>logout()} className="flex flex-1 font-bold bg-black-500">
                    LOGOUT
                  </Button>
               </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default UsernameMenu;