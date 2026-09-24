import { memo } from "react";

const Navbar = ({ displayMessage }) => {
  console.log("🎨 Navbar rendered!");

  return (
    <h1>{displayMessage()}</h1>
  );
};

// memo tells React: "Only re-render if displayMessage actually changes"
export default memo(Navbar);
