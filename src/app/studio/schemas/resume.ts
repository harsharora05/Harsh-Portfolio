import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        defineField({
            name: 'file',
            title: 'Resume PDF',
            type: 'file',
            validation: (Rule) => Rule.required(),
            options: {
                accept: 'application/pdf',
            },
        }),
    ],
})


