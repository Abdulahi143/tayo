import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'roles',
  title: 'Roles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ],
})
