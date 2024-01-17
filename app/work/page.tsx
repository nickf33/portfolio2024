import { getWorks } from "@/cms/sanity-utils";
import WorkDisplay from "@/components/workComponents/WorkDisplay";

export default async function Works() {
  const workData = await getWorks();

  return (
    <>
      <div id="works" className="container page">
        <div className="inner__wrap">
          <div className="text__wrap">
            <div className="title__wrap">
              <h1 className="heading">My Work</h1>
            </div>
            <div className="title__bar"></div>
            <p className="para md-mw">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint
              facilis soluta quia nemo explicabo in aut ab fuga. Vero beatae
              neque sit saepe alias veritatis, repellendus ipsa corporis optio.
            </p>
          </div>
          <div className="container work__items">
            <WorkDisplay workData={workData} />
          </div>
        </div>
      </div>
    </>
  );
}
