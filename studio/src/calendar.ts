import S from '@sanity/desk-tool/structure-builder'
import { MdSchedule } from '@react-icons/all-files/md/MdSchedule'

const calendarPage = S.documentListItem()
  .title('Calendar Page')
  .schemaType('document')
  .icon(MdSchedule)
  .child(
    S.document()
      .schemaType('calendar')
      .title('Calendar Page')
      .documentId('calendarPage')
      .views([S.view.form()]),
  )

export default calendarPage
