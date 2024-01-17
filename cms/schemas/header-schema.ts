const header = {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "abtImg",
      title: "About Image",
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
      name: "designImg",
      title: "Deign Image",
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
      name: "devImg",
      title: "Dev Image",
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
  ],
};

export default header;
