import { useEffect } from "react";
import { useTheme } from "next-themes";

const LandingLayout = ({ children }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <main className="relative bg-gray-300 flex flex-col text-gray-800">{children}</main>
  );
};

export default LandingLayout;
