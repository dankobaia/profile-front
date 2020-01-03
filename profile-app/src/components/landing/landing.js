import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Creators as siteActions } from "../../store/ducks/site";

import { LandingContainer, Landing, AnimmationContainer } from "./styles";
import Lottie from "react-lottie";
import programmer from "../../assets/images/programmer.json";
import { useEffect } from "react";

export default function() {
  const dispatch = useDispatch();

  const [lottieAnimationEnd, setLottieAnimationEnd] = useState(false);
  const [introFinished, setintroFinished] = useState(false);
  const [slideupLanding, setSlideupLanding] = useState(false);
  const [removeLanding, setRemoveLanding] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: programmer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll");
  }, []);
  return (
    <LandingContainer
      id="landing"
      slideup={slideupLanding}
      hide={removeLanding}
      onAnimationEnd={e => {
        if (e.target.id === "landing") {
          setRemoveLanding(true);
          dispatch(siteActions.fixMenu());
          dispatch(siteActions.unlockScroll());
        }
      }}
    >
      {!introFinished ? (
        <AnimmationContainer
          finished={lottieAnimationEnd}
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
                callback: () => setLottieAnimationEnd(true)
              }
            ]}
          />
        </AnimmationContainer>
      ) : (
        <Landing
          onAnimationEnd={e => {
            setSlideupLanding(true);
          }}
        >
          {/* <MoreButton onClick={() => unlockSite()}>Site \/</MoreButton> */}
        </Landing>
      )}
    </LandingContainer>
  );
}
