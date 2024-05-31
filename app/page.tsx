import Navbar from "@/components/Navbar";
import Image from "next/image";
import bg from "../images/backgroundImg.png";
import about from "../images/About.png";
import email from "../images/email.png";
import twitter from "../images/twitter.png";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div
        id="home"
        className="bg-blue-50 flex flex-col lg:flex-row h-auto lg:h-[700px] justify-between"
      >
        <div className="flex flex-col my-auto space-y-8 lg:space-y-24 px-4 lg:pl-[60px] lg:pr-0 lg:pt-10">
          <div className="lg:px-4 px-10 text-center my-32 lg:my-0 lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Stake & Bet on Your Habits
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:w-[500px]">
              Everyday you become one step closer to your goal. Don’t give up!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:relative">
          <Image
            className="z-[-10] w-full h-auto lg:w-[650px] lg:h-[700px] object-cover"
            src={bg}
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-blue-50"></div>
        </div>
      </div>

      <section id="about" className="py-20 z-10 bg-blue-50">
        <div className="flex flex-col lg:flex-row items-center px-4 lg:px-10 justify-between">
          <div className="w-full lg:w-[800px] lg:mr-20">
            <Image className="z-[-10] w-full h-auto" src={about} alt="" />
          </div>
          <div className="container mx-auto px-4 text-left mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              About Rabbit
            </h2>
            <p className="text-gray-600 mb-6">
              The Habit Tracker app facilitates the creation of personalized
              habits, enabling users to manage their waking and sleep schedules,
              physical activities like running or walking, and coding routines
              tracked through GitHub commits. Users can set reminders for daily
              tasks and create challenges involving multiple habits, allowing
              participants to stake money and compete against each other.
            </p>
            <p className="text-gray-600">
              The app collects data from individual mobile devices, such as
              running distances and coding activity, and presents it in a
              user-friendly interface. Leader boards showcase users progress
              within their circles, fostering motivation and accountability.
              Additionally, users can earn rewards by completing normal habits
              and participating in challenges, promoting consistent behavior and
              healthy competition.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We would love to hear from you! Reach out to us through the
            following platforms:
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://x.com/Repeat2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-semibold text-blue-600 hover:underline"
            >
              <Image src={twitter} alt="Twitter" width={24} height={24} />
              <span className="ml-2">Twitter</span>
            </a>
            <a
              href="mailto:rabbitstakeandbet@gmail.com"
              className="flex items-center font-semibold text-blue-600 hover:underline"
            >
              <Image src={email} alt="Email" width={24} height={24} />
              <span className="ml-2">Email</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 Rabbit. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
