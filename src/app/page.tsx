import Head from "next/head";
import Link from "next/link";


const CTA: React.FC = () => {
  return (
      <main className="flex flex-col items-center justify-center h-screen bg-center bg-cover">
        <Head>
          <title>Welcome to Savorique</title>
          <meta name="description" content="Experience the best food and atmosphere in town." />
        </Head>

        <header>
          <h1 className="text-4xl font-black text-center uppercase md:text-6xl bg-[#8093F1] text-[#C7F0BD] p-2 rounded-lg shadow-lg">Savorique</h1>
          <p className="mt-6 text-2xl font-bold text-center text-[#B388EB]">Experience the best food and atmosphere in town.</p>
        </header>
  
        <nav className="mt-10">
          <Link 
            href="/menu" 
            className="px-6 py-3 font-bold transition duration-500 ease-in-out rounded-lg uppercase text-[#C7F0BD] bg-[#8093F1] hover:bg-[#6b7bca] shadow-lg"
          >
            View Our Menu
          </Link>
        </nav>
      </main>
    );
};

export default CTA;