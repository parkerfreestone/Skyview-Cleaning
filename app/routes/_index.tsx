import type { MetaFunction } from "@remix-run/node";
import { AboutUs } from "~/components/shared/AboutUs";
import { HeroBanner } from "~/components/shared/HeroBanner";
import { Services } from "~/components/shared/Services";
import { TopNavigation } from "~/components/shared/TopNavigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Skyview Cleaning - Home" },
    {
      name: "description",
      content:
        "Welcome to the Skyview Cleaning website! Feel free to look around or schedule a cleaning!",
    },
  ];
};

export default function Index() {
  return (
    <>
      <TopNavigation />
      <HeroBanner />
      <AboutUs />
      <Services />
    </>
  );
}
