export default function ContactDetails() {
  return (
    <>
      <div className="details__container">
        <div className="details__wrap alt__font">
          <div className="text__wrap right margin__sm">
            <p className="para alt__font">Name:</p>
            <a className="link" href="tel:+4479413977023">
              <p className="para alt__font underline"> +44 7413 977 023</p>
            </a>
          </div>

          <div className="text__wrap right margin__sm">
            <p className="para alt__font">Email:</p>
            <a className="link" href="mailto:nick.feltham33@gmail.com">
              <p className="para alt__font underline">
                nick.feltham33@gmail.com
              </p>
            </a>
          </div>
          <div className="text__wrap right margin__sm">
            <p className="para alt__font">CV/résume:</p>
            <a className="link" href="tel:+4479413977023">
              <p className="para alt__font underline"> +44 7413 977 023</p>
            </a>
          </div>
        </div>
        <div className="social__wrap">
          <div className="icon contact">1</div>
          <div className="icon contact">2</div>
          <div className="icon contact">3</div>
        </div>
      </div>
    </>
  );
}
