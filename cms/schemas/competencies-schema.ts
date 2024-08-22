const competencies = {
  name: "competencies",
  title: "Competencies",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "competencies",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "COMPETENCIES",
    },
    {
      name: "categories",
      title: "Competency Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "categoryName",
              title: "Category Name",
              type: "string",
            },
            {
              name: "skills",
              title: "Skills",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};

export default competencies;
