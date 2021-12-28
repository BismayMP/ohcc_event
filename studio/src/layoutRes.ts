import S from '@sanity/desk-tool/structure-builder'
import { MdHome } from '@react-icons/all-files/md/MdHome'

const layout = S.documentListItem()
  .title('Layout')
  .schemaType('document')
  .icon(MdHome)
  .child(
    S.document()
      .schemaType('layout')
      .title('Layout')
      .documentId('layoutRes')
      .views([S.view.form()]),
  )

export default layout
