// pages/page.js (formerly index.js)
import Image from "next/image";
import stylesGlobal from "../src/app/globals.css";
import styles from "../src/app/page.module.css";
import RootLayout from "@/app/layout";
// import Navbar from "../src/app/nav"; // Adjust the path as needed

export default function HomePage() {
  // Renamed function to reflect page name change
  return (
    <>
      <RootLayout>
        <main className={styles.main}>
          <div className='spacer'/>
          <h5 className={styles.pageTitle}>Demo Reel</h5>
          <div className='spacer'/>
          <div style={{width: "100%", padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src="https://player.vimeo.com/video/927635512?h=97d0026c86&title=0&byline=0&portrait=0"
        style={{ border: 'none', margin: '0', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        // frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
        </main>
      </RootLayout>
    </>
  );
}
