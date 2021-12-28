import S from '@sanity/desk-tool/structure-builder'
import homePage from './src/homePage'
import calendarPage from './src/calendar'
import layout from './src/layoutRes'

const hiddenDocTypes = (listItem) =>
  !['home', 'calendar', 'layout'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      homePage,
      calendarPage,
      layout,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
