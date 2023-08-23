import Navbar from "../components/nav";
import Footer from "../components/footer";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { lazy } from "react";

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  profileImg: string;
};

const profileTemp = "/template.jpeg";
const restaurantPicture = "/about-us-picture-001.webp";
const restaurantPic002 = "/about-us-picture-002.webp";

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  profileImg,
}) => (
  <div className="duration-500 rounded-lg">
    <div className="opacity-90">
      <a href="#" className="relative flex justify-center">
        <Image
          src={profileImg}
          alt={name}
          layout="fixed"
          width={500}
          height={500}
          className="flex object-cover w-40 h-40 mx-auto rounded-full"
        />
      </a>
    </div>
    <div className="w-full text-center">
      <p className="font-black text-gray-600 uppercase md:text-2xl lg:mt-12 ">
        {name}
      </p>
      <p className="mb-6 text-sm italic font-light text-gray-700 md:text-xl ">
        {role}
      </p>
      <p className="font-semibold text-gray-600 ">{description}</p>
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
      <Head>
        <title>About | Our Restaurant</title>
        <meta
          name="description"
          content="Learn more about Our Restaurant, meet our team and discover our history and values."
        />
      </Head>
      <Navbar />
      <main aria-label="About us">
        <div className="px-6 py-4 mt-16">
          <div className="relative float-left mr-6">
            <Image
              src={restaurantPicture}
              alt="Restaurant Picture"
              loading={"lazy"}
              width={1000}
              height={500}
              className="rounded-lg opacity-75"
            />
          </div>
          <div className="text-2xl">
            <p>
              Our restaurant was founded in 1990 with the vision of providing
              the best dining experience. Over the years, we have managed to
              establish a strong reputation for our exceptional dishes and
              first-class service. We are committed to sourcing and using
              high-quality, local produce in our dishes. Our menu changes
              seasonally, reflecting the best that the market has to offer.
            </p>
            <p className="mt-2">
              At the core of our team, you will find professional chefs who
              infuse their extensive knowledge and boundless creativity into
              curating the most tantalizing food menus.
            </p>
          </div>
          <div className="clear-both"></div> {/* Clears the float */}
          <div className="mt-6">
            <div className="flex flex-col gap-6 text-lg sm:flex-row mt-4">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
