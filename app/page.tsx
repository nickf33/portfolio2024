import Link from "next/link";
import Button from "@/components/Button";

export default function Header() {
  return (
    <>
      <header id="hero" className="container landing">
        <div className="inner__wrap">
          {/*  */}
          <div className="text__wrap lg-mw">
            <h1 className="heading">
              Hi, I am Nick. a recent{" "}
              <Link
                target="_blank"
                href="https://www.open.ac.uk/"
                className="gradient__text education"
                rel="noopener noreferrer"
              >
                Open University
              </Link>{" "}
              graduate with first class honours in web technologies, design and
              development. Take a look at{" "}
              <Link href="/work" className="gradient__text">
                my work
              </Link>{" "}
              &nbsp;or&nbsp;view&nbsp;my&nbsp;
              <Link href="/about" className="gradient__text">
                Resume
              </Link>
              .
            </h1>
          </div>
          <Button additionalClass="margin-1" href="/contact">
            Contact
          </Button>

          <div className="text__wrap sm-mw">
            <p className="para op-60">
              Crafted in Figma, powered by Next.js and Sanity CMS. Structured
              with Typescript and SCSS.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
