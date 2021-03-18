import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHiden, setCursorHiden] = useState(false);
  const [cursorClicked, setCursorClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const location = useLocation();

 const addEventListeners = useCallback(() => {
   document.addEventListener("mousemove", onMouseMove);
   document.addEventListener("mouseenter", onMouseEnter);
   document.addEventListener("mouseleave", onMouseLeave);
   document.addEventListener("mousedown", onMouseDown);
   document.addEventListener("mouseup", onMouseUp);
 }, []);

 const removeEventListeners = useCallback(() => {
   document.removeEventListener("mousemove", onMouseMove);
   document.removeEventListener("mouseenter", onMouseEnter);
   document.removeEventListener("mouseleave", onMouseLeave);
   document.removeEventListener("mousedown", onMouseDown);
   document.removeEventListener("mouseup", onMouseUp);
 }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll(".cursorHoverEffect").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const onMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const onMouseLeave = () => {
    setCursorHiden(true);
  };

  const onMouseEnter = () => {
    setCursorHiden(false);
  };

  const onMouseDown = () => {
    setCursorClicked(true);
  };

  const onMouseUp = () => {
    setCursorClicked(false);
  };

  useEffect(() => {
      setTimeout(()=> {
        addEventListeners();
        handleLinkHoverEvents();
      }, 500)
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners, location]);


  const cursorClasses = ["Cursor"];
  if (cursorHiden) {
    cursorClasses.push("hiden");
  }

  if (cursorClicked) {
    cursorClasses.push("clicked");
  }

  if (linkHovered) {
    cursorClasses.push("link-hovered");
  }

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <div
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
      className={cursorClasses.join(" ")}
    ></div>
  );
};

export default Cursor;
