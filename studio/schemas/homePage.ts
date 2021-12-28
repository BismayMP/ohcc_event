export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'blockContent',
    },
    {
      name: 'uploadPassword',
      title: 'Upload files password',
      type: 'string',
    },
    {
      name: 'alert',
      title: 'Alert',
      type: 'array',
      of: [{ type: 'alert' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
