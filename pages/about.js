import Link from "next/link";
import Image from "next/image";

const About = () => (
  <p>
    <Image src="/images/profile.jpg" width={144} height={144} />
    some <Link href="/">thing</Link> here
  </p>
);

export default About;
