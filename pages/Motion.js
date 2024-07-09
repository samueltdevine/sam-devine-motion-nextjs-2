// pages/index.js
import ImageContainer from "@/app/components/imageContainer";
import RootLayout from "@/app/layout";
import Link from "next/link";
import React from "react";
const Motion = () => {
  return (
    <RootLayout>
      <div>
        <h1>Motion Page</h1>
        <div>
        <Link href="/Arcadia">
        <ImageContainer imagePath={'/arc_2.png'}/>
            Arcadia
        </Link>
        </div>
      </div>

    </RootLayout>
  );
};

export default Motion;
