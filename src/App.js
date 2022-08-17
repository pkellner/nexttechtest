import React, { useState } from "react";
import Speakers from "./components/speakers/Speakers";
import Speaker from "./components/speakers/Speaker";
import Layout from "./components/layout/Layout";
import { SpeakersDataProvider } from "./contexts/SpeakersDataContext";
import About from "./components/about/About";

const App = ({ url }) => {
  function useSpeakerAppRouter(url) {
    const [routeUrl, setRouteUrl] = useState(url);

    function setRoute(url) {
      history.replaceState({}, url.substring(2), url);
      setRouteUrl(url);
    }

    let activeComponent = <Speakers />;
    if (routeUrl.startsWith("/speaker")) {
      activeComponent = <Speaker id={parseInt(routeUrl.substring(9))} />;
    } else if (routeUrl === "/about") {
      activeComponent = <About />;
    }

    return { activeComponent, setRoute };
  }

  const { activeComponent, setRoute } = useSpeakerAppRouter(url);

  return (
    <SpeakersDataProvider>
      <button
        onClick={() => {
          setRoute("/about");
        }}
      >
        Nav TO ABOUT
      </button>
      <Layout>{activeComponent}</Layout>
    </SpeakersDataProvider>
  );
};

export default App;
