export default {
  name: 'post',
  type: 'document',
  title: 'Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
            validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
            validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
            validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
            validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
            validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
            validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
