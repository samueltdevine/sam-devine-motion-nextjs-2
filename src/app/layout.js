import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <div className={inter.className}>
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
