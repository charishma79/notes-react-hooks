// Write your code here
import {useState} from 'react'

import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  NotesContainer,
  TitleInput,
  Form,
  TextArea,
  Button,
  NotesList,
  EmptyViewContainer,
  EmptyImage,
  EmptyHeading,
  EmptyText,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeText = event => setText(event.target.value)
  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      title,
      text,
    }
    if (title !== '' && text !== '') {
      setNotesList(prevNotesList => [...prevNotesList, newNote])
    }
    setTitle('')
    setText('')
  }
  console.log(notesList)
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <NotesContainer>
        <Form onSubmit={onAddNote}>
          <TitleInput
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <TextArea
            rows="8"
            cols="70"
            placeholder="Take a Note..."
            onChange={onChangeText}
            value={text}
          />
          <Button type="submit">Add</Button>
        </Form>
      </NotesContainer>
      {notesList.length > 0 ? (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      ) : (
        <EmptyViewContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyText>Notes you add will appear here</EmptyText>
        </EmptyViewContainer>
      )}
    </MainContainer>
  )
}

export default Notes
