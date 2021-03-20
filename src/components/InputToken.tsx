import Router from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setAccessToken } from '~/lib/slices/mapbox'

const InputToken: React.FC = () => {
  const dispatch = useDispatch()
  const [inputToken, setInputToken] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(setAccessToken(inputToken))
    Router.push('/map')
    event.preventDefault()
  }

  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Input your mapbox access token
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="mapbox-access-token" className="sr-only">
              Mapbox access token
            </label>
            <input
              name="token"
              type="text"
              autoComplete="mapbox-access-token"
              value={inputToken}
              onChange={(e) => setInputToken(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Mapbox access token"
            />
          </div>
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default InputToken
