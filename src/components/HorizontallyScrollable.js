import { useRef } from "react";

function HorizontallyScrollable({ children, className = "" }) {
  const scrollRef = useRef();

  const handleMouseDown = (e) => {
    const oldX = e.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const newX = e.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={className} ref={scrollRef} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
}

export default HorizontallyScrollable;
