import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import FormUsers from './Components/FormUsers'
import UserCard from './Components/UserCard'

const baseURL = 'https://users-crud1.herokuapp.com'


function App() {
  
const [updateInfo, setUpdateInfo] = useState()


const [users, setUsers] = useState()
const [formIsClose, setFormIsClose] = useState(true)

const getAlUsers = () => {
  const URL = `${baseURL}/users/` 
  axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => comsole.log(err))
}

useEffect(() => {
  getAlUsers()
}, [])

console.log(users)


const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAlUsers()
      })
      .catch(err => console.log(err))
}

const deleteUserById = id => {
  const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAlUsers()
      })
      .catch(err => console.log(err))
}

const updateUserById = (id, data) => {
  const URL = `${baseURL}/users/${id}/`
        axios.patch(URL, data)
        .then(res => {
          console.log(res.data)
          getAlUsers()
        })
        .catch(err => console.log(err))
}


const handleOpenForm = () => {
    setFormIsClose(false)
}
  return (
    <div className="App">
      <div className='App__container-title'>
      <h1 className='App__title'>USERS CRUD</h1>
      <button className='App__btn' onClick={handleOpenForm}>Create a New User</button>
      </div>
      <div className={`form-container ${formIsClose && `disable__form`}`}>
      <FormUsers 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setFormIsClose={setFormIsClose} 
      />
      </div> 
      <div className='users-container'>
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
          />
          
        ))
      }
      </div>
    </div>
  )
}

export default App
