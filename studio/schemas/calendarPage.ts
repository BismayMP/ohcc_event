export default {
  name: 'calendar',
  title: 'Calendar Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'blockContent',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'event' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
}
