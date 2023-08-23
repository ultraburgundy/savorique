import Head from "next/head";
import Link from "next/link";


const CTA: React.FC = () => {
  return (
      <main className="flex flex-col items-center justify-center h-screen bg-center bg-cover landing-page">
        <Head>
          <title>Welcome to Our Restaurant</title>
          <meta name="description" content="Experience the best food and atmosphere in town." />
        </Head>

        <header>
          <h1 className="text-4xl font-black text-center uppercase md:text-6xl text-stone-800">Welcome to Our Restaurant</h1>
          <p className="mt-6 text-2xl font-bold text-center text-stone-800">Experience the best food and atmosphere in town.</p>
        </header>
  
        <nav className="mt-10">
          <Link 
            href="/menu" 
            className="px-6 py-3 font-bold transition duration-500 ease-in-out rounded text-stone-200 bg-stone-800 hover:bg-blue-700"
          >
            View Our Menu
          </Link>
        </nav>
      </main>
    );
};

export default CTA;