// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

if (!window.Rive) {
  console.error("Rive library not loaded");
  return;
}

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://cdn.rive.app/runtime.js"></script>
          {/* Other head elements */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
