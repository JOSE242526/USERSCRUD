import React from 'react'
import "./Style/UserCard.css"

const UserCard = ({user, deleteUserById, setUpdateInfo, setFormIsClose}) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  return (
    <article className='user'>
        <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__list'>
            <li className='user__item'><span className='user__span'>Email </span>{user.email}</li>
            <li className='user__item'><span className='user__span'>Birthday </span> 
            <div>
            <i className='user__gift fa-solid fa-gift'></i> {user.birthday}
            </div>
            </li>
        </ul>
        <footer className='user__footer'>
          <button className='user__btn' onClick={() => deleteUserById(user.id)}>
            <div className='user__item-container'>
        <i  className="user__trash fa-solid fa-trash-can"></i>
        </div>
        </button>
        <button className='user__btn' onClick={handleEdit}>
          <div>
        <i  className="user__edit fa-solid fa-pen-to-square"></i>
        </div>
        </button>
        </footer>
    </article>
  )
}

export default UserCard