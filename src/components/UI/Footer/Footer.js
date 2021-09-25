import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        Copyright &copy;&nbsp;
        <a target="_blank" rel="noreferrer" className={classes.company}>
          DS Tech
        </a>
      </p>

      <article className={classes.socialLinks}>
        <a
          href="https://www.facebook.com/darsh.sanghvi9"
          target="_blank"
          rel="noreferrer"
          className={classes.socialLink}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/sanghvi_darsh"
          target="_blank"
          rel="noreferrer"
          className={classes.socialLink}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/darsh-sanghvi/"
          target="_blank"
          rel="noreferrer"
          className={classes.socialLink}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </article>

      <p className={classes.creator}>
        created by{" "}
        <a
          href="https://www.linkedin.com/in/darsh-sanghvi"
          target="_blank"
          rel="noreferrer"
        >
          Darsh Sanghavi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
