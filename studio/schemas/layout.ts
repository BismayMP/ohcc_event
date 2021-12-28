export default {
  name: 'layout',
  title: 'Layout',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
      media: 'headerImage',
    },
  },
}
