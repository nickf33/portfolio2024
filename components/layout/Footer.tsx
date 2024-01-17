import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

interface FooterProps {
  position?: string;
  innerWidth?: string;
}

export default function Footer({
  innerWidth,
  position,
}: FooterProps): JSX.Element {
  const footerPosition = classNames(position, "footer");
  const footerClasses = classNames("inner__wrap space-between", innerWidth);

  return (
    <>
      <footer id="footer" className={footerPosition}>
        <div className={footerClasses}>
          <p className="footer__text">Portfolio 2024</p>
          <div className="mode__btn-wrap">
            <div className="mode__btn">0</div>
          </div>
        </div>
      </footer>
    </>
  );
}
