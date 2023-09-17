import Head from "next/head";
import Link from "next/link";
import {IoFastFoodSharp} from "react-icons/io5";


const CTA: React.FC = () => {
  return (
      <main className="flex flex-col items-center justify-center h-screen bg-center bg-cover">
        <Head>
          <title>Welcome to Savorique</title>
          <meta name="description" content="Experience the best food and atmosphere in town." />
        </Head>

        <header>
         <div className="text-4xl font-black text-center uppercase md:text-6xl bg-blue-950 bg-opacity-80 text-blue-100 p-2 rounded-lg shadow-lg">
          <h1 > <IoFastFoodSharp className="inline-flex m-4" />Savorique</h1>
          <h2 className="flex justify-end text-xl md:text-3xl ">Restaurant</h2>
          </div>
          
        </header>
  
        <nav className="mt-10">
          <Link 
            href="/menu" 
            className="px-6 py-3 font-bold bg-opacity-80  transition duration-500 ease-in-out rounded-lg uppercase text-blue-100 bg-blue-950 hover:bg-blue-900 shadow-lg"
          >
            View Our Menu
          </Link>
        </nav>
      </main>
    );
};

export default CTA;