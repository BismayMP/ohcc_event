import S from '@sanity/desk-tool/structure-builder'
import { MdHome } from '@react-icons/all-files/md/MdHome'

const homePage = S.documentListItem()
  .title('Home Page')
  .schemaType('document')
  .icon(MdHome)
  .child(
    S.document()
      .schemaType('home')
      .title('Home Page')
      .documentId('homePage')
      .views([S.view.form()]),
  )

export default homePage
