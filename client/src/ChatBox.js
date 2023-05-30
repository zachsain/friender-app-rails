import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import "./ChatBox.css"

function Chat({name, message, profilePic, timestamp, id}) {
  return (
    <Link to={`/chat/${id}`}>
    <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className="chat__timestamp"> {timestamp} </p>
    </div>
    </Link>
  )
}


export default Chat