import React from 'react';
import OpenGraphHead from '../../components/Misc/OpenGraphHead';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Cover from '../../components/Cover';
import Service from '../../components/Services/Service';

const Services = () => {
  return (
    <>
      <OpenGraphHead
        title="Services | Crossfit Club Jammu"
        type="article"
        url="https://crossfitclub.in/services"
      />
      <Menu />
      <main>
        <Cover
          src="/stock/unsplash-pedro-araujo-about.jpg"
          alt="equipments in the services page background"
          text="Services"
        />
        <Service
          heading="Modern Equipments"
          text="We offer some of the world’s best fitness equipment, from hi-tech treadmills to ergonomic bikes, cross trainers, benchpress, chestpress and many more."
          src="/crossfit/equipment.jpg"
          alt="Image of Body Builder"
          direction="row-reverse"
        />
        <Service
          heading="Professional Trainers"
          text="Our expert team of trainers will help you lose weight, get fitter and stronger with a professional training plan."
          src="/slide-1.jpg"
          alt="Image of Body Builder"
          direction="row"
        />
        <Service
          heading="Healthy Nutrition"
          text="We at Crossfit Club help you to achieve your fitness goals by providing nutritional plans that are tailored specifily to you."
          src="/stock/pexels-charlotte-may-service.jpg"
          alt="Image of Body Builder"
          direction="row-reverse"
        />
      </main>
      <Footer />
    </>
  );
};

export default Services;
