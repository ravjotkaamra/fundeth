import React from 'react';
import OpenGraphHead from '../../components/Misc/OpenGraphHead';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Cover from '../../components/Cover';
import Trainer from '../../components/Trainer';
import Gallery from '../../components/Gallery';

const Team = () => {
  return (
    <>
      <OpenGraphHead
        title="Our Team | Crossfit Club Jammu"
        type="website"
        url="https://crossfitclub.in/team"
      />
      <header>
        <Menu />
      </header>
      <main>
        <Cover
          src="/stock/pexels-leon-ardho-team.jpg"
          alt="our team page background"
          text="Our Team"
        />
        <Trainer />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Team;
