import { UserProvider } from '../lib/userContext'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}