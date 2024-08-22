const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
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
      name: "category",
      title: "Category",
      type: "string",
      intialValue: "Blog",
      options: {
        list: [
          { title: "Blog", value: "blog" },
          { title: "Animation", value: "animation" },
          { title: "Tutorial", value: "tutorial" },
          { title: "Design", value: "design" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
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
      name: "link",
      title: "Link URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default article;
