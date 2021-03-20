import Head from 'next/head'

import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My kepler.gl</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-grow justify-center items-center px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
