const framework = {
  name: "framework",
  title: "Framework",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "iconImg",
      title: "Icon Image",
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
      name: "skillRating",
      title: "Skill Rating",
      type: "string",
      intialValue: "Average",
      options: {
        list: [
          { title: "Basic", value: "basic" },
          { title: "Average", value: "average" },
          { title: "Good", value: "good" },
          { title: "Excellent", value: "excellent" },
        ],
      },
    },
  ],
};

export default framework;
