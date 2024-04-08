import { defineField, defineType } from 'sanity'

export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        defineField(
             {
            name: 'galleryImage',
            type: 'image',
            title: 'Title Image',
                  validation: (Rule: any) => Rule.required(),
          },
        ),
        defineField(
                {
            name: 'caption',
            type: 'string',
            title: 'Image caption',
                  validation: (Rule: any) => Rule.required(),
          },
        )
    ]
}