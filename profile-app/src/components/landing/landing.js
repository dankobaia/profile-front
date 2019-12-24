import React, { useState } from "react";
import {
  LandingContainer,
  Landing,
  MoreButton,
  AnimmationContainer
} from "./styles";
import Lottie from "react-lottie";
import programmer from "../../assets/images/programmer.json";

export default function() {
  const [progammerAnimationEnd, setProgammerAnimationEnd] = useState(true);
  const [introFinished, setintroFinished] = useState(true);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: programmer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function unlockSite() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth"
    });
  }

  return (
    <LandingContainer>
      {!introFinished ? (
        <AnimmationContainer
          finished={progammerAnimationEnd}
          onAnimationEnd={e => {
            setintroFinished(true);
          }}
        >
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            isClickToPauseDisabled={true}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => setProgammerAnimationEnd(true)
              }
            ]}
          />
        </AnimmationContainer>
      ) : (
        <Landing>
          <MoreButton onClick={() => unlockSite()}>Site \/</MoreButton>
        </Landing>
      )}
    </LandingContainer>
  );
}
