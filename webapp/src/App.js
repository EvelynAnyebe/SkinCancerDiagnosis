import handyScopeImage from "./assets/handyscope.jpg";
import Header from "./compnonents/header/header";
import Footer from "./compnonents/footer/footer";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${handyScopeImage}")`,
    backgroundSize: "cover",
  };

  return (
    <div className="App">
      <Header />
      <div className=" text-white " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            <h2 className="text-xl uppercase font-bold">
              EALRY DIAGNOSIS OF SKIN CANCER
            </h2>
            <h1 className="text-6xl font-bold">
              We care about your skin and provide answers
            </h1>
            <p className="text-lg">
              Get early diagnosis on your skin lesions by providing pictures
              from you cameras to us. We have integrated machine learning
              technology to provide you with a reliable predictions and help you
              with your next steps.
            </p>
            <button className="bg-gradient-to-r from-sky-600 to-red-600 py-3 px-6 text-lg rounded-md w-48">
              Get started
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">How to prepare my image for diagnosis</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Have a phone with digital camera
            </h3>
            <p className="text-lg">
              Your phone camera can reliably take quality picture that can be
              used with the classifier.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">
              Take a picture of the part of you skin where a mole or growth
              appears.
            </h3>
            <p className="text-lg">
              Make sure to be in a bright site. You can ask someone to help you
              take a picture. Do not stay too far away from the camera. Make the
              sure the image is focused on the lesion area.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
