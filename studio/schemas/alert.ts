export default {
  name: 'alert',
  title: 'Alert',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'description',
    },
  },
}
