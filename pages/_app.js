import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/register.css";
import "../styles/index.css";
import "../styles/profile.css";
import "../styles/wishlist.css"


import { ContextProvider } from '../context'

export default function App({ Component, pageProps }) {
  return (
      <ContextProvider>
    <Component {...pageProps} />
      </ContextProvider>
  );
}
