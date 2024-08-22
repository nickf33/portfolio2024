const interests = {
  name: "interests",
  title: "Interests",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "interests",
      readOnly: true,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "brief",
      title: "Brief",
      type: "string",
    },
  ],
};

export default interests;
