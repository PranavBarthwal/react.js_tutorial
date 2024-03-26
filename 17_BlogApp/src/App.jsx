import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import {login, logout} from './store/authSlice'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  }, [])


  if(loading){
    return <h1>Loading...</h1>
  }
  else{
    return (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        {/* <main>
        TODO:  <Outlet />
        </main> */}
        <Footer />
      </div>
    </div>
  )
}
}
  

export default App
