import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="Jack`s photo"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I`m Jack</h1>
      <p>
        This blog about web development - especially frontend frameworks like
        Angular, or React and so on.
      </p>
    </section>
  );
}

export default Hero;
