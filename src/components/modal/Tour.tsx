import React, { useEffect, useState } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";

interface State {
  run: boolean;
}

type TTourProps = { children?: React.ReactNode };

const Tour = ({ children }: TTourProps) => {
  const [{ run }, setState] = useState<State>({
    run: false,
  });

  const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setState({ run: true });
  };

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState({ run: false });
    }
  };

  useEffect(() => {
    setState({ run: true });
    return () => {
      setState({ run: false });
    };
  }, []);

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      run={run}
      scrollToFirstStep={false}
      showProgress
      showSkipButton
      styles={{
        options: {
          primaryColor: "#000",
          textColor: "#004a14",
          zIndex: 1000,
        },
      }}
      steps={[
        {
          content: <h2>Let begin our journey!</h2>,
          locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
          placement: "center",
          target: "body",
        },
        {
          content: "These are our super awesome projects!",
          title: "Our projects",
          target: "#FloatingDock0",
          placement: "top",
          disableScrolling: true,
        },
        {
          content: "These are our super awesome projects!",
          title: "Our projects",
          target: "#FloatingDock1",
          placement: "top",
          disableScrolling: true,
        },
        {
          content: "These are our super awesome projects!",
          title: "Our projects",
          target: "#FloatingDock2",
          placement: "top",
          disableScrolling: true,
        },
        {
          content: "These are our super awesome projects!",
          title: "Our projects",
          target: "#FloatingDock3",
          placement: "top",
          disableScrolling: true,
        },
        {
          content: (
            <div>
              <h3>All about us</h3>
              <svg height="50px" preserveAspectRatio="xMidYMid" viewBox="0 0 96 96" width="50px" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                    fill="#000000"
                  />
                </g>
              </svg>
            </div>
          ),
          target: "#FloatingDock4",
          placement: "top",
          disableScrolling: true,
        },
        {
          content: <h2>Let all folks</h2>,
          placement: "center",
          target: "body",
        },
      ]}
    />
  );
};

export default Tour;
