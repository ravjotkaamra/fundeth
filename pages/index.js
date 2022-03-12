import OpenGraphHead from "../components/Misc/OpenGraphHead";
import Menu from "../components/Menu";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CrowdFundForm from "../components/CrowdFundForm";
import Login from "./login";
import Landing from "../components/Landing";

const Crossfit = () => {
  return (
    <>
      <OpenGraphHead
        title="Home | Crossfit Club Jammu"
        type="website"
        url="https://crossfitclub.in/"
      />
      <Menu />
      <main>
        <Landing />
        <CrowdFundForm />
      </main>
      <Footer />
    </>
  );
};

export default Crossfit;
