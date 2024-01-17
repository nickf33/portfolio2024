const resume = {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      intialValue: "Work",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Education", value: "education" },
          { title: "Interests", value: "interests" },
          { title: "Skills", value: "skills" },
        ],
      },
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
