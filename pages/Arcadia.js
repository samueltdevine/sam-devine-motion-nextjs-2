import RootLayout from "@/app/layout";
import stylesGlobal from "../src/app/globals.css";
import styles from "../src/app/page.module.css";
import ImageContainer from "@/app/components/imageContainer";
// import Navbar from "../src/app/nav"; // Adjust the path as needed

export default function HomePage() {
  // Renamed function to reflect page name change
  return (
    <>
      <RootLayout>
        <div style={{ position: "relative", width: '100%', minHeight: "800px" }}>
          <iframe
            src="https://player.vimeo.com/video/927635512?h=97d0026c86&title=0&byline=0&portrait=0"
            style={{ border: 'none', margin: '0', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            // frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
        <p>
          This video was created with the team at <a href="https://madebythings.com/">Made By Things</a>.
        </p>

        <p>
          I led art direction, design, animation, and music on this video. There were times I was pondering late at night how I could make this project, my baby, better. I kept coming back to the idea of custom synth-wave music so I made my own 80s inspired score to emphasize the biggest moments in this video.
        </p>
        <p>
          I love working on a team, but enjoyed the sense of ownership that working more independently on this project provided.
        </p>
        <div className="spacer"/>
        <div style={{display: "flex", gap: "1rem"}}>
          <ImageContainer imagePath={'/arc_2.png'}/>
          <ImageContainer imagePath={'/arc_3.png'}/>
        </div>
      </RootLayout>
    </>
  );
}

