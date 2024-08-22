const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "about",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "statement",
      title: "Personal Statement",
      type: "string",
    },
    {
      name: "mainImg",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Tag",
          type: "string",
        },
      ],
    },
    {
      name: "closingTitle",
      title: "closing Title",
      type: "string",
    },
    {
      name: "closingStatement",
      title: "Closing Statement",
      type: "string",
    },
  ],
};

export default about;
