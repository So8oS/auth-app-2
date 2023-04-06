import { type NextPage } from "next";
import Auth from "../components/Auth";
import { useSession } from "next-auth/react";
import Account from "./[Account]";



const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col justify-center items-center ">
      {!session ? (
        <Auth/>
      ) : (
        <Account/>
      )
        }
    </div>
  );
};

export default Home;
