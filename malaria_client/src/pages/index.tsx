import type { NextPage } from "next";
import {
  Hero,
} from "@/sections/index";
import { LandingLayout } from "../layouts";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/Footer/MainFooter";

const Home: NextPage = () => {
  return (
    <LandingLayout>
      <Navbar />
      <main>
        <Hero />
      </main>

    </LandingLayout>
  );
};

export default Home;
