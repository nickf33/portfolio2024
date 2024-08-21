const project = {
  name: "project",
  title: "Project",
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
                btnText: "View Project",
              },
              {
                title: "Development",
                value: "Development",
                btnText: "Live Site",
              },
              {
                title: "Design/Development",
                value: "Design/Development",
                btnText: "View Project",
              },
            ],
          },
        },
      ],
      initialValue: {
        value: "Project",
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
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectOverview",
      title: "Project Overview",
      type: "text",
    },
    {
      name: "missionObjective",
      title: "Mission Objective",
      type: "text",
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "challengeTitle",
              title: "Challenge Title",
              type: "string",
            },
            {
              name: "challengeText",
              title: "Challenge Text",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "conclusion",
      title: "Conclusion",
      type: "text",
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
      title: "Parallax Image Two",
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
    {
      name: "credits",
      title: "Credits",
      type: "string",
    },
  ],
};

export default project;
