"use client"

import React from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
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
    <div className="p-4 mb-4 text-center">
      <h3 className="text-xl font-bold">Location</h3>
      <p className="text-gray-600">{address}</p>
      <p className="text-gray-600">{city}</p>
      <p className="text-gray-600">{postalCode}</p>
      <p className="text-gray-600">{country}</p>
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
            <h1 className="mb-4 text-3xl font-bold text-center uppercase text-stone-700">Hours & Location</h1>
            <h2 className="font-bold text-center uppercase text-stone-700">Open Every Day Of The Week</h2>
            <p className="text-center uppercase text-stone-500">7AM - 3PM</p>
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
