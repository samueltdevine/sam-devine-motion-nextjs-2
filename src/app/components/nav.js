import Link from "next/link";
import styles from "../css/nav.module.css";
// import "../../../src/app/globals.css";
// import React, { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
const Navbar = () => {
  const { rive, RiveComponent } = useRive({
    src: "/sam_devine_motion_logo_2.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const contactInput = useStateMachineInput(rive, "State Machine 1", "Contact");
  const musicInput = useStateMachineInput(rive, "State Machine 1", "Music");
  const motionInput = useStateMachineInput(rive, "State Machine 1", "Motion");

  console.log("contact, music, motion", contactInput, musicInput, motionInput);

  const contactTrue = () => {
    if (contactInput) {
      // Assuming "bump" is a boolean input
      contactInput.value = true;
      musicInput.value = false;
      motionInput.value = false;
    }
  };
  const motionTrue = () => {
    if (contactInput) {
      // Assuming "bump" is a boolean input
      motionInput.value = true;
      contactInput.value = false;
      musicInput.value = false;
    }
  };
  const musicTrue = () => {
    if (contactInput) {
      // Assuming "bump" is a boolean input

      musicInput.value = true;
      contactInput.value = false;
      motionInput.value = false;
    }
  };
  const noTrue = () => {
    if (contactInput) {
      // Assuming "bump" is a boolean input
      contactInput.value = false;
      musicInput.value = false;
      motionInput.value = false;
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoHolder}>
        <h3 className={styles.logoText}>Sam DeVine</h3>
        <RiveComponent
          style={{ height: "100px", width: "100px" }}
          // onClick={() => bumpInput && bumpInput.fire()}
        />
      </div>
      <ul className={styles.linkList}>
        <li>
          <Link onClick={noTrue} href="/">
            Home
          </Link>
        </li>
        <li onClick={motionTrue}>
          <Link href="/Motion">Motion</Link>
        </li>
        <li onClick={musicTrue}>
          <Link href="/Music">Music</Link>
        </li>
        <li onClick={contactTrue}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
