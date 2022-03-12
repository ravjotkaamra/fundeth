import OpenGraphHead from "../components/Misc/OpenGraphHead";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

const Crossfit = () => {
  return (
    <>
      <OpenGraphHead
        title="Home | FundEth Blockchain Crowdfunding with Ethereum"
        type="website"
        url="https://fundeth.in/"
      />
      <Landing />
      <Footer />
    </>
  );
};

export default Crossfit;
