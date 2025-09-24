import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectCategory',      // The internal name, changed from 'tag'
    title: 'Project Categories',  // The display name in the studio, changed from 'Tag'
    type: 'document',
    fields: [
        defineField({
            name: 'Category',
            title: 'Category',
            type: 'string',
            description: 'The name of the Category (e.g., AI ,Web Apps).',
            validation: (Rule) => Rule.required(),
        }),
    ],
})