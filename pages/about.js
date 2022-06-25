import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

const About = () => (
  <>
    <Head>
      <title>This is a title</title>
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
    <p>
      <Image src="/images/profile.jpg" width={144} height={144} />
      some <Link href="/">thing</Link> here
    </p>
  </>
);

export default About;
