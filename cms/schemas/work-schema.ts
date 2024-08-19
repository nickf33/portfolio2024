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
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectOverview",
      title: "Project Overview",
      type: "text", // Text type for an in-depth overview
    },
    {
      name: "missionObjective",
      title: "Mission Objective",
      type: "text", // Text type for the project's objective
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array", // Dynamic array of objects to hold multiple challenges
      of: [
        {
          type: "object",
          fields: [
            {
              name: "challengeTitle",
              title: "Challenge Title",
              type: "string", // Title for each challenge
            },
            {
              name: "challengeText",
              title: "Challenge Text",
              type: "text", // Description of the challenge and how it was overcome
            },
          ],
        },
      ],
    },
    {
      name: "conclusion",
      title: "Conclusion",
      type: "text", // Text type for the project's conclusion
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

export default work;
