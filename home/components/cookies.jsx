import React, { useEffect, useState } from "react";

export default function Cookies() {
  const [ShowConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const doNotShow = localStorage.getItem("cookie-consent");
    if (doNotShow != "true") {
      setShowConsent(true);
    }
  }, []);

  function agree() {
    localStorage.setItem("cookie-consent", true);
    setShowConsent(false);
  }
  return (
    <>
      {ShowConsent && (
        <div
          style={{
            position: "fixed",
            zIndex: 50,
            bottom: 10,
            right: 10,
            backgroundColor: "black",
            color: "white",
            paddingBottom: "50px",
            paddingTop: "50px",
            padding: "30px",
            maxWidth: "400px",
            marginLeft: 10,
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Ez az oldal sütiket használ
          </h1>
          <p>
            Ahhoz, hogy elmenthessük a világos vagy sötét témát kedvelted
            jobban, hogy átirányításkor felfoghassuk mi történik és még sok más
            dologhoz sütiket kell használnunk. Amennyiben ezt nem tennénk az
            oldal sokkal roszabb élményt nyújtana.
          </p>
          <button
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "yellow",
              padding: "5px",
              borderRadius: "5px",
              marginTop: "10px",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={agree}
          >
            Elfogadom
          </button>
        </div>
      )}
    </>
  );
}
