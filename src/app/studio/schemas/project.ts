import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'tag',
            title: 'Tag',
            description: 'A special tag for the project, like "featured".',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Allows for better image cropping
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'projectType',
            title: 'Type',
            description: 'The category of the project (e.g., Web App, Mobile App).',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description', // Note: Corrected from 'decription'
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'techStack',
            title: 'Tech Stack',
            description: 'Add the technologies used for this project.',
            type: 'array',
            of: [{ type: 'string' }], // Defines an array of strings
        }),
        defineField({
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'liveLink',
            title: 'Live Link',
            type: 'url',
        }),
    ],

})


