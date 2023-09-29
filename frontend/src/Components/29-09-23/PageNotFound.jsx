import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const router = useNavigate()
  const [timer, setTimer] = useState(5)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000);
    } else {
      router("/")
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <h2>Page Not Found, redirecting you to home page in {timer} sec..</h2>
    </div>
  )
}

export default PageNotFound 