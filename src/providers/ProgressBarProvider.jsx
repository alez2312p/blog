"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function ProgressBarProvider({ children }) {
  return (
    <>
      <ProgressBar
        height="5px"
        color="#fffd00"
        options={{
          showSpinner: false,
        }}
        shallowRouting
      />
      {children}
    </>
  );
}

export default ProgressBarProvider;
