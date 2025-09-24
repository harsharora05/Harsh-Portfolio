import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'currentStatus',      // The internal name, changed from 'tag'
    title: 'Current Status',  // The display name in the studio, changed from 'Tag'
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The name of the title (e.g., Student, Full Stack Developer).',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Enter a color ',
        }),
    ],
})