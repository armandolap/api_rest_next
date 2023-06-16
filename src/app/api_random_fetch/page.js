'use client'
import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react'

export default function Api_Random_Fetch() {
  
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  const handleSubmit = async (event) => {
    event.preventDefault()
    const endpoint = 'https://random-data-api.com/api/v2/users?size=' + event.target.users.value
    const response = await fetch(endpoint)
    const result = await response.json()
    setData(result)
    console.log(data);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center it p-10">
        <h1 className="m-3">Fetch API Random</h1>
        <div className="w-full max-w-xs">
          <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Cantidad usuarios?
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="users" name='users' type="number" min={1} placeholder="Añade número" required />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Fetch
              </button>
            </div>
          </form>
        </div>
        { data.length > 0 ? (
            data.forEach(user => {
              <section className='mt-5'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full" src="{user.avatar}" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{user.username}</div>
                    <p className="text-gray-700 text-base">
                      {user.email}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2 ">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </section>
            })
        ) : <p>Sin usuarios</p>
            
          
              
        
        }
      </main>
      <Footer />
    </>
  )
}