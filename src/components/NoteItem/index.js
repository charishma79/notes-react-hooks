// Write your code here
import {NotesItem, TitleHeading, TextParagraph} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, text} = noteDetails
  return (
    <NotesItem>
      <TitleHeading>{title}</TitleHeading>
      <TextParagraph>{text}</TextParagraph>
    </NotesItem>
  )
}

export default NoteItem
