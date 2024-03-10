import { useState } from "react";
import TeamLists from "./components/TeamLists";
import Header from "./components/header";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <TeamLists searchTerm={searchTerm} />
    </>
  );
};

export default Layout;
