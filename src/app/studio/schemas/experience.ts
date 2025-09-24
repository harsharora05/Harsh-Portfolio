import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            description: 'The title of your role (e.g., Software Engineer).',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            description: 'The name of the company.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'The time period you worked there (e.g., 2 Months, Jan 2024 - Present).',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'The location of the job (e.g., Remote, Manipal).',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text', // Use 'text' for longer, multi-paragraph content
            description: 'A summary of your responsibilities and achievements.',
            validation: (Rule) => Rule.required(),
        }),

    ],
})
