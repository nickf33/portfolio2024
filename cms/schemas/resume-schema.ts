const resume = {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
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
              name: "item",
              title: "Item",
              type: "array",
              of: [{ type: "block" }],
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
