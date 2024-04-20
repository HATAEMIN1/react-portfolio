import React, { useRef, useEffect } from "react";
import Navbar from "../layout/Header/Navbar";
import Footer from "../layout/Footer/Footer";
import "../assets/css/style.scss";

function Home(props) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) {
      console.error("Container or overlay not found");
      return;
    }

    const handleMouseMove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;

      overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
      overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;
      container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseOut = () => {
      overlay.style.filter = "opacity(0)";
      container.style.transform =
        "perspective(350px) rotateY(0deg) rotateX(0deg)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="visual">
        <img className="block w-1/5 " src="/OT.jpg" alt="" />
      </div>

      <div ref={containerRef} className="pikacontainer">
        <div ref={overlayRef} className="picaoverlay"></div>
        <div className="pikacard"></div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
