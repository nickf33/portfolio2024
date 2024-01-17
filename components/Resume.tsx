import { getResume } from "@/cms/sanity-utils";

export default async function Resume() {
  const resumeData = await getResume();

  // https://bobbyhadz.com/blog/typescript-property-map-does-not-exist-on-type
  // Without this, mapping produces an error.
  // Convert an Object's Values to an array in JavaScript
  // https://bobbyhadz.com/blog/javascript-get-object-values-as-array
  // To render the data to the screen, i needed to add the index number to move through the array
  // **** This is no longer required but keeping notes for future ref.

  resumeData.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <>
      {resumeData.map((item, idx) => (
        <article className="item__container" key={item._id}>
          <div className="category__wrap">
            <h2 className={`subheading gradient__text ${item.category}`}>
              {item.category} •
            </h2>
          </div>
          <div className="info__wrap">
            <h2 className="subheading">{item.title}</h2>
            <h3 className="subheading">{item.subTitle}</h3>
            <p className="para">{item.brief}</p>
            <ul className="list__wrap">
              {item.listItems && item.listItems.length > 0 && (
                <>
                  <p className="para bold">{item.listTitle}</p>
                  <ul className="list__items">
                    {item.listItems.map((listItem: any, i: number) => (
                      <li key={i} className="list__item">
                        {listItem.item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </ul>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptas repellendus mollitia minima.
            </p>
            <div className="dates__wrap">
              <p className="para alt-font">01/01/23 - 10/10/23</p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
