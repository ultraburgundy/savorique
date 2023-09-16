"use client"

import dynamic from "next/dynamic";
//dynamically importing components to effectively use lazy loading
const Navbar = dynamic(() => import('../components/nav'));
const Footer = dynamic(() => import ('../components/footer'));
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PageTransition from "../components/pageTransition";
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
    <div className="p-4 mb-4 text-center bg-[#8093F1] rounded-lg shadow-xl">
      <h3 className="text-3xl font-black uppercase text-blue-200 border-b-2 border-indigo-950 border-opacity-50 p-4">Location</h3>
      <p className="text-blue-100 font-semibold mt-2">{address}</p>
      <p className="text-blue-100 font-semibold">{city}</p>
      <p className="text-blue-100 font-semibold">{postalCode}</p>
      <p className="text-blue-100 font-semibold">{country}</p>
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
    <PageTransition>
      <Head>
        <title>Visit Us | Our Restaurant</title>
        <meta name="description" content="Visit our restaurant at 123 Main St, New York. Open every day of the week from 7AM to 3PM." />
      </Head>
      <Navbar />
      <main aria-label="Visit us">
        <div className="gap-4 py-8 mt-16 sm:flex ">
          <div className="flex-none min-h-screen p-2 sm:w-64 sm:ml-6 ">
            <h1 className="mb-4 text-3xl font-black text-center uppercase text-blue-200 bg-[#8093F1] rounded-lg p-2 shadow-xl">Hours</h1>
            <h2 className="font-bold text-center uppercase text-[#8093F1]">Open Every Day Of The Week</h2>
            <p className="text-center uppercase text-blue-950 font-semibold mb-4">7AM - 3PM</p>
            <Location {...restaurantLocation} />
          </div>
          <div className="w-full mr-8 md:flex-grow-1 md:block">
            <MapComponent {...coordinates} />
          </div>
        </div>
      </main>
      <Footer/>
      </PageTransition>
    </>
  );
};

export default VisitPage;
