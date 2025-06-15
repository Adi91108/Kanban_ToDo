import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { ImGift } from 'react-icons/im';
import logo from "../../public/logo5.png";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Login = () => {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <div className="flex w-full  min-h-screen flex-col bg-violet-100 ">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-milk/90 backdrop-blur-lg border-b border-orange z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className=" bg-orange rounded-lg">
                <img
                  src={logo}
                  alt="Calendar icon"
                  width={36}
                  height={36}
                  className="text-white"
                />
              </div>
              <span className="text-xl font-bold text-orange">
                Creative Upaay
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* <button
                onClick={() => console.log("new")}
                className="text-milk hover:text-black transition-colors text-md font-bold hidden sm:block"
              >
                Sign In
              </button> */}

              <button
                className="bg-orange text-milk h-10 px-3 p#5030E5y-1 rounded-md hover:text-black transition-colors text-md font-bold "
                onClick={() => loginWithRedirect()}
              >
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange to-orange">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-milk leading-tight">
                Master Your{" "}
                <span className="text-white bg-gradient-to-r from-milk to-orange">
                  Event,
                </span>{" "}
                <span className="bg-gradient-to-r from-milk to-peach bg-clip-text text-transparent">
                  Engage Your Audience
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-12">
                <button
                  onClick={() => loginWithRedirect()}
                  className="w-full sm:w-auto bg-gradient-to-r from-peach to-milk hover:bg-orange text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Start Creating Events
                  <BsArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-milk mb-4">
              About Creative Upaay Project
            </h2>
            <p className="text-xl text-milk">
              The Creative Upaay Full Stack Development Assignment is a
              React-based task management dashboard built with the goal of
              closely replicating a provided Figma design. The dashboard is
              structured into three primary sections—To Do, In Progress, and
              Done—each representing different stages of task progress. Users
              can dynamically add tasks with custom titles and descriptions, and
              organize them across sections. The application leverages Redux for
              state management, ensuring a centralized and scalable approach to
              handling tasks. Additionally, the state is persisted using Local
              Storage, allowing users to retain their tasks even after
              refreshing the page. A filtering feature is implemented to help
              users sort or view tasks based on custom criteria such as priority
              or due date. Enhancing user experience further, the dashboard
              includes drag-and-drop functionality, enabling intuitive movement
              of tasks between different stages. The UI is developed using
              modern design libraries such as Tailwind CSS (or
              Material-UI/Chakra UI depending on the implementation), providing
              a responsive and visually consistent interface. This project not
              only fulfills all core requirements of Level 1 but also emphasizes
              usability, maintainability, and performance in its overall
              architecture and design.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-milk border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://www.linkedin.com/in/aditya-sen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-orange font-semibold"
            >
              Aditya Sen
            </a>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Adi91108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <BsGithub className="w-5 h-5 text-black font-semibold" />
                <span className="text-orange">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-sen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LiaLinkedin className="w-5 h-5 text-black font-semibold" />
                <span className="text-orange">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
