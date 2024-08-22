const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "skills",
      readOnly: true,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "skillsList",
      title: "Skills List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "skillName",
              title: "Skill Name",
              type: "string",
            },
            {
              name: "skillIcon",
              title: "Skill Icon",
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
        },
      ],
    },
  ],
};

export default skills;
