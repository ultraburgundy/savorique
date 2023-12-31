import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import PageTransition from "../components/pageTransition";

const Navbar = dynamic(() => import("../components/nav"));
const Footer = dynamic(() => import("../components/footer"));

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  profileImg: string;
};

const profileTemp = "/template.jpeg";
const restaurantPicture = "/about-us-picture-001.jpg";

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  profileImg,
}) => (
  <div className="rounded-lg p-4 sm:p-8">
    <div className="opacity-90">
      <div className="relative flex justify-center w-32 h-32 sm:w-40 sm:h-40 mx-auto">
        <Image
          src={profileImg}
          alt={name}
          layout="fill"
          className="object-cover w-full h-full rounded-full border-2 border-[#8093F1]"
        />
      </div>
    </div>
    <div className="w-full text-center mt-4 bg-white bg-opacity-75 p-2 rounded-lg shadow-xl">
      <p className="font-black text-blue-600 uppercase text-lg sm:text-xl lg:text-2xl ">
        {name}
      </p>
      <p className="mb-4 text-sm italic font-bold text-blue-900 sm:text-lg lg:text-xl">
        {role}
      </p>
      <p className="font-semibold text-blue-950 text-sm sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  </div>
);

const About: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "John Doe",
      role: "Head Chef",
      description:
        "John has over 20 years of experience in the culinary world, with a specialty in French cuisine.",
      profileImg: profileTemp,
    },
    {
      name: "Jane Smith",
      role: "Sommelier",
      description:
        "Jane has a deep knowledge of wine pairings, ensuring our guests have the perfect wine to accompany their meal.",
      profileImg: profileTemp,
    },
    {
      name: "Bill Johnson",
      role: "Manager",
      description:
        "Bill oversees the restaurant's operations and ensures all guests have a pleasant dining experience.",
      profileImg: profileTemp,
    },
  ];

  return (
    <>
    <PageTransition>
      <Head>
        <title>About | Our Restaurant</title>
        <meta
          name="description"
          content="Learn more about Our Restaurant, meet our team and discover our history and values."
        />
      </Head>
      <Navbar />
      <main aria-label="About Us">
        <div className="relative h-screen">
          <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 flex items-start justify-start bg-blue-50 bg-opacity-90 md:w-1/2 p-4  ">
            <div className="flex m-auto">
              
            <p className="text-blue-900 font-semibold text-2xl p-4 mt-4 rounded-lg">
            <h1 className="uppercase font-black flex md:text-6xl text-4xl ">About Us</h1>
              Our restaurant was founded in 1990 with the vision of providing
              the best dining experience. Over the years, we have managed to
              establish a strong reputation for our exceptional dishes and
              first-class service. We are committed to sourcing and using
              high-quality, local produce in our dishes. Our menu changes
              seasonally, reflecting the best that the market has to offer.
            </p>
            </div>
          </div>
            <Image
              src={restaurantPicture}
              alt="Restaurant Picture"
              loading={"lazy"}
              layout="fill"
              className="object-cover w-full h-full opacity-85"
            />
          </div>
     
        </div>
        <div className="sm:p-16 p-4  shadow-xl bg-white bg-opacity-75">
          <p className="lg:text-4xl text-lg sm:text-2xl text-center text-blue-900 font-semibold sm:w-1/2 m-auto ">
            At the core of our team, you will find professional chefs who
            infuse their extensive knowledge and boundless creativity into
            curating the most tantalizing food menus.
          </p>
        </div>
        <div className="mt-6 p-8">
          <div className="flex flex-col gap-6 text-lg sm:flex-row mt-4 sm:w-1/2 m-auto ">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      </PageTransition>
    </>
  );
};

export default About;
