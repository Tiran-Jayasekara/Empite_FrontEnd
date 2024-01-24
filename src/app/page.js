
export default function Home() {
  return (
    <>
      {/* Pushing The Envelop of Software Development */}
      <div className="flex md:flex-row flex-col md:mt-14 w-full">
        <div className="md:w-1/2 w-full">
          <img src="assests/pushing.png" className="w-full h-auto" alt="Empite Logo" />
        </div>

        {/* This is for Desktop Responsive */}
        <div className="md:w-1/2 md:flex flex-col hidden">
          <div className="font-playfair-bold xl:text-6xl xl:ml-32 xl:mr-64 md:text-4xl lg:text-5xl lg:mt-14 md:mt-10  mr-20 md:ml-20 lg:ml-32 text-2xl">Pushing <br></br>The Envelop Of Software Development</div>
          <p className="mt-14 md:ml-20 font-muli lg:ml-32 xl:mr-64">With unique business ideas and the <br></br> passionate people behind</p>
          <div className="flex flex-row justify-start items-center">
            <button className="block md:ml-20 lg:ml-32 mr-0 mt-8 py-2 px-5 ml-6 text-xs lg:text-sm text-white rounded bg-black">
              Get Started
            </button>
            <img src="assests/playButton.png" className="w-12 h-12 lg:ml-14 md:ml-6 mr-0 mt-8" alt="Empite Logo" />
            <p className="mt-8 ml-4 text-xs lg:text-sm">How it works</p>
          </div>
        </div>


        {/* This is For Mobile Responsive */}
        <div className="md:hidden flex flex-wrap w-full ">
          <div className="font-playfair-bold mt-10  text-center text-3xl mx-10">Pushing The Envelop Of Software Development</div>
          <p className="mt-10 text-center mx-10">With unique business ideas and the passionate people behind</p>
          <div className="flex flex-row justify-between items-center mx-auto">
            <button className="block mr-0 mt-8 py-2 px-5 ml-0  text-white rounded bg-black">
              Get Started
            </button>
            <img src="assests/playButton.png" className="w-12 h-12 ml-4 mt-8" alt="Play Button" />
            <p className="mt-8 ml-4">How it works</p>
          </div>
        </div>

      </div>

      {/* What We Do */}
      <div className="bg-black w-full h-auto md:mt-1 flex flex-col md:flex-row md:pb-32 pb-32 mt-20">
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col text-white md:text-left text-center">
            <p className="text-gray-700 text-xl font-muli md:mt-28 md:ml-32 mt-10">WHAT WE DO</p>
            <p className="font-playfair-semibold font-semibold md:text-5xl md:ml-32 mt-4 md:mr-20 text-3xl">Integrated tech <br></br>solutions across<br></br> all digital platforms</p>
          </div>
        </div>



        <div className="md:w-1/2 w-full">
          <div className="flex flex-col text-white">
            <p className="md:mt-32 mt-14 md:mr-28 md:text-left md:mx-0 mx-4 text-xs md:text-sm text-justify font-space-grotesk">We are committed to keeping you ahead in today’s fast-paced and ever-evolving world by delivering digital solutions that solve problems in a secure, simple and effective way.</p>
          </div>

          <div className="flex flex-row mt-10 w-full">
            <div className="flex flex-col w-full items-center md:items-start">
              <img src="assests/computer.png" className="w-10 h-10" alt="Computer" />
              <p className="md:mr-10 md:mx-0 mx-2 font-space-grotesk text-center font-bold mt-6 text-base text-white">Custom Software</p>
              <p className="md:mr-10 md:mx-0 mx-2 md:text-left font-muli text-xs mt-4 text-center text-white">We create solutions that solve your business problems. Our team has a decade long success track record.</p>
            </div>

            <div className="flex flex-col w-full items-center md:items-start">
              <img src="assests/bracket.png" className="w-10 h-10" alt="Bracket" />
              <p className="lg:mr-28  md:mx-0 mx-2 font-space-grotesk font-bold mt-6 text-base text-white">Web Applications</p>
              <p className="lg:mr-28 md:mr-10 md:mx-0 mx-2 md:text-left text-center font-muli text-xs mt-4 text-white">We typically build all web applications from scratch to satisfy your requirements.</p>
            </div>
          </div>

          <div className="flex flex-row mt-10">
            <div className="flex flex-col w-full items-center md:items-start">
              <img src="assests/weather.png" className="w-6 h-10" alt="weather" />
              <p className="md:mr-10 md:mx-0 mx-0 font-space-grotesk md:text-left text-center font-bold mt-6 text-base text-white">Mobile Applications</p>
              <p className="md:mr-10 md:mx-0 mx-2 md:text-left text-center font-muli text-xs mt-4 text-white">We transform your mobile app ideas into high quality customised apps that are easy to use.</p>
            </div>

            <div className="flex flex-col w-full items-center md:items-start">
              <img src="assests/ux-design.png" className="w-10 h-10" alt="ux-design" />
              <p className="md:mr-28 md:mx-0 mx-2 font-space-grotesk md:text-left text-center font-bold mt-6 text-base text-white">UI / UX Design</p>
              <p className="lg:mr-28 md:mr-10 md:mx-0 mx-2 md:text-left text-center font-muli text-xs mt-4 text-white">We craft better user experience and Interface designs for your digital products.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Capabilities / ShowCase */}
      <div className="flex md:flex-row flex-col w-full">

        <div className="md:w-1/2 flex flex-col items-start relative">
          <img src="assests/meeting.png" className="w-auto h-auto" alt="Bracket" />
          <div className="absolute md:top-28 top-14 left-0 w-full ">
            <p className="text-gray-300 text-sm font-muli md:text-sm md:ml-28 xl:mt-10 md:text-left text-center">CAPABILITIES</p>
            <p className="font-playfair-semibold md:text-3xl lg:text-4xl xl:text-5xl text-xl lg:ml-28 md:ml-28 mt-6 md:text-left text-center text-white">
              Mobile.<br></br> Web.<br></br> Cloud.
            </p>
            <button className="w-48 text-sm items-center mx-auto justify-center md:mx-0 md:justify-start mt-8 py-2 px-5 lg:ml-28 md:ml-28 flex flex-row text-white rounded bg-black">
              View Services
              <img src="assests/next.png" className="w-6 h-4 ml-4" alt="Next" />
            </button>
          </div>
        </div>


        <div className="md:w-1/2 flex flex-col items-start relative">
          <img src="assests/meeting2.png" className="w-auto h-auto" alt="Bracket" />
          <div className="absolute md:top-28 top-14 left-0 w-full ">
            <p className="text-gray-300 text-sm font-muli md:text-sm md:ml-28 xl:mt-10 md:text-left text-center">SHOWCASE</p>
            <p className="font-playfair-semibold md:text-3xl lg:text-4xl xl:text-5xl text-xl lg:ml-28 md:ml-28 mt-6 md:text-left text-center text-white">
              Our most recent<br></br> projects.<br></br><br></br>
            </p>
            <button className="w-48 text-sm items-center mx-auto justify-center md:mx-0 md:justify-start mt-8 py-2 px-5 lg:ml-28 md:ml-28 flex flex-row text-white rounded bg-black">
              View Projects
              <img src="assests/next.png" className="w-6 h-4 ml-4" alt="Next" />
            </button>
          </div>
        </div>

      </div>

      {/* We help to create Digital strategies. */}
      <div className="flex md:flex-row flex-col w-full mt-20 mb-20">
        <div className="md:w-1/2 w-full md:ml-4">
          <p className="text-gray-900 text-sm font-muli lg:ml-24 md:ml-20 md:text-left text-center">CAPABILITIES</p>
          <p className="font-playfair-semibold md:text-4xl lg:text-5xl xl:text-6xl text-3xl lg:ml-24 md:ml-20 mt-4 md:mt-10  md:text-left text-center text-black">
            We help to create <br></br> Digital strategies.
          </p>
          <p className="font-space-grotesk font-bold mt-8 text-base text-black lg:ml-24 md:ml-20 md:text-left text-center">Website & Mobile Development</p>
          <div className="relative w-9/12 h-2 bg-gray-300 lg:ml-24 md:ml-20 rounded-2xl md:mt-10 lg:mt-1 mx-auto mt-10">
            <div className="absolute h-full bg-red-600 w-9/12 rounded-2xl"></div>

            {/* Percentage Label */}
            <div className="absolute h-full w-10/12 flex items-center justify-end pr-2">
              <div className="flex bg-black rounded-sm -mt-14">
                <p className="text-white text-xs p-1 font-bold">86%</p>
              </div>

            </div>
          </div>
        </div>


        <div className="md:w-1/2 w-full text-center md:text-left">
          <p className="font-space-grotesk font-bold mt-8 text-base text-black md:ml-24">- Website & Mobile App Design</p>
          <p className="font-muli text-xs md:ml-24 mt-6 lg:mr-56 md:mr-20 md:text-left mx-10 md:mx-0">We’ve created a full-stack structure for our working <b>workflow processes</b>, were from the funny the century initial all the made, have spare to negatives.</p>
          <p className="font-space-grotesk font-bold mt-8 text-base text-black md:ml-24">+ Motion Graphics & Animation</p>
          <p className="font-space-grotesk font-bold mt-8 text-base text-black md:ml-24">+ User Experience</p>
        </div>

      </div>

      {/* Gallery */}
      <div className="flex md:flex-row flex-col w-full mb-10">
        <div className="md:w-7/12 relative">
          <img src="assests/collection/Mask4.png" className="w-full h-5/6 object-cover" alt="Mask4" />
          <div className="absolute top-0 md:-mt-12 md:ml-10 left-0 w-full h-full flex items-center justify-center">
            {/* icon goes here */}
            <img src="assests/collection/playButton.png" className="w-12 h-12 object-cover" alt="Mask4" />
          </div>

        </div>


        <div className="md:w-5/12 flex flex-row ">
          <div className="md:w-6/12 ">
            <img src="assests/collection/Mask5.png" className="w-full md:h-5/6 h-3/5" alt="Mask5" />
          </div>
          <div className="md:w-4/12 ">
            <img src="assests/collection/Mask6.png" className="w-full md:h-5/6 h-3/5" alt="Mask6" />
          </div>
          <div className="md:w-2/12">

          </div>

        </div>
      </div>

      {/* Succeeded project */}
      <div className="flex flex-row w-full">
        <div className="w-7/12">
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col">
            <img src="assests/collection/playButton.png" className="w-auto h-auto object-cover" alt="Mask4" />

            </div>
            <div className="w-1/2 flex flex-col">
            <img src="assests/collection/playButton.png" className="w-auto h-auto object-cover" alt="Mask4" />
              
            </div>
          </div>

        </div>

      </div>



    </>
  );
}
