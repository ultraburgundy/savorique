"use client"

import dynamic from "next/dynamic";
//dynamically importing components to effectively use lazy loading
const Navbar = dynamic(() => import('../components/nav'));
const Footer = dynamic(() => import ('../components/footer'));
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Head from 'next/head';

type LocationProps = {
 
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type MapProps = {
lat: number;
lng: number;
}

const Location: React.FC<LocationProps> = ({ address, city, postalCode, country }) => (
    <div className="p-4 mb-4 text-center ">
      <h3 className="text-xl font-bold text-[#D3D57C]">Location</h3>
      <p className="text-[#5E313E] font-semibold">{address}</p>
      <p className="text-[#5E313E] font-semibold">{city}</p>
      <p className="text-[#5E313E] font-semibold">{postalCode}</p>
      <p className="text-[#5E313E] font-semibold">{country}</p>
    </div>
  );
  
const MapComponent: React.FC<MapProps> = ({ lat, lng }) => (
  <LoadScript googleMapsApiKey="">
    <GoogleMap
      mapContainerClassName="mapContainer"
      center={{ lat, lng }}
      zoom={10}
    />
  </LoadScript>
);

const VisitPage: React.FC = () => {
  const coordinates = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const restaurantLocation = {
    address: '123 Main St',
    city: 'New York',
    postalCode: '10001',
    country: 'USA',
  };

  return (
    <>
      <Head>
        <title>Visit Us | Our Restaurant</title>
        <meta name="description" content="Visit our restaurant at 123 Main St, New York. Open every day of the week from 7AM to 3PM." />
      </Head>
      <Navbar />
      <main aria-label="Visit us">
        <div className="gap-4 py-8 mt-16 sm:flex">
          <div className="flex-none min-h-screen p-2 sm:w-64 sm:ml-6">
            <h1 className="mb-4 text-3xl font-bold text-center uppercase text-[#D3D57C]">Hours & Location</h1>
            <h2 className="font-bold text-center uppercase text-[#CAD178]">Open Every Day Of The Week</h2>
            <p className="text-center uppercase text-[#5E313E] font-semibold">7AM - 3PM</p>
            <Location {...restaurantLocation} />
          </div>
          <div className="w-full mr-8 md:flex-grow-1 md:block">
            <MapComponent {...coordinates} />
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default VisitPage;
