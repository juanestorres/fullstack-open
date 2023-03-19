import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import personService from './services/persons'
import Notification from './components/Notification';
import './App.css';


const App = () => {
  const [persons, setPersons] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('')
  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)

      })
  }


  useEffect(hook, [])

  const personsToShow = nameFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (!persons.some((person) => personObject.name === person.name)) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotificationMessage(`Added ${returnedPerson.name} `)
          setNotificationType('notification')
          setTimeout(() => {
            setNotificationMessage('')
          }, 5000)
        })

    }
    else {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        const currentPerson = persons.find(n => n.name === newName)

        personService
          .update(currentPerson.id, { ...currentPerson, number: newNumber })
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== currentPerson.id ? person : updatedPerson))
            setNewName('')
            setNewNumber('')
            setNotificationMessage(`Updated ${updatedPerson.name} `)
            setTimeout(() => {
              setNotificationMessage('')
            }, 5000)
          })
          .catch(_error => {
            setNotificationMessage(`Information of ${currentPerson.name} has already been removed from the server.`)
            setNotificationType('error')
            setTimeout(() => {
              setNotificationMessage('')
            }, 5000)
          }
          
         
          )
      }
    }
  }

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(_returnedPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => setNewNumber(event.target.value)


   if (!persons) { 
    return null 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType}/>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter}></Filter>
      <h2>Add a new</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></PersonForm>

      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson}></Persons>

    </div>
  )
}

export default App;