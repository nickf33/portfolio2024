const resume = {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "resume",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "brief",
      title: "Brief",
      type: "string",
    },
    {
      name: "listTitle",
      title: "List Title",
      type: "string",
    },
    {
      name: "listItems",
      title: "List Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "itemTitle",
              title: "Item Title",
              type: "string",
            },
            {
              name: "itemDescription",
              title: "Item Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "string",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "string",
    },
  ],
};

export default resume;
