import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";


export default function Login() {
  const [email, setEmail] = useState("")
  const router = useRouter()
  const handleLogIn = () => {
    const user_hash = { email: email, external_id: uuidv4(), org_id: 1, app_id: 2 }
    fetch(`/api/wingback/user`, {
      method: "POST",
      body:  JSON.stringify(user_hash)
    })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user))
      router.push("/")
    })
  }

  return (
    <div>
      <input placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}>
      </input>
      <button onClick={(e) => {
        e.preventDefault()
        handleLogIn()
      } }>
        Log in
      </button>
    </div>
  )
}