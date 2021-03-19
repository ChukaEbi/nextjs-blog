import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext([null, () => {}])

const UserProvider = (props) => {
  const [state, setState] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if(user) {
      setState(user)
    }
  }, [])

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}

