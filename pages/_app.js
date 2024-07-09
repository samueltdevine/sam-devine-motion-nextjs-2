import Navbar from "@/app/components/nav";
// import "../src/globals.css"; // Import global styles
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <div className="siteWrap">
        <script src="https://cdn.rive.app/runtime.js"></script>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
