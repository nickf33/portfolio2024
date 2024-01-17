const work = {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "object",
      fields: [
        {
          name: "value",
          title: "Value",
          type: "string",
          options: {
            list: [
              {
                title: "Design",
                value: "Design",
                btnText: "View Work",
              },
              {
                title: "Development",
                value: "Development",
                btnText: "Live Site",
              },
              {
                title: "Design/Development",
                value: "Design/Development",
                btnText: "View Work",
              },
            ],
          },
        },
      ],
      initialValue: {
        value: "Work",
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "landingImg",
      title: "Landing Image",
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
      name: "tech",
      title: "Tech Stack",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "credits",
      title: "Credits",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "snippet",
      title: "Snippet",
      type: "string",
    },
    {
      name: "parallaxOne",
      title: "Parallax Image One",
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
      name: "parallaxTwo",
      title: "parallax Image Two",
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
      name: "lowerTitle",
      title: "Lower Title",
      type: "string",
    },
    {
      name: "lowerText",
      title: "Lower Text",
      type: "string",
    },
    {
      name: "lowerImg",
      title: "Lower Image",
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
      name: "link",
      title: "Link URL",
      type: "url",
    },
  ],
};

export default work;
