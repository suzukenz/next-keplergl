import 'tailwindcss/tailwind.css'

import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'

import store from '~/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
