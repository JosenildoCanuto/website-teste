import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import { HomeView } from "../components/views/home";

export default function Home() {
  return (
    <>
      <Link to="/" activeStyle={{ backgroundColor: "red" }}>
        Home
      </Link>
      <Link to="/contatos">Contatos</Link>

      <HomeView />
    </>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
