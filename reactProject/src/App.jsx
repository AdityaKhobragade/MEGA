import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './App.css'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [ loading, setLoading ] = useState( false );
  const dispatch = useDispatch();

  useEffect( () => {
    authService.getCurrentUser()
      .then( ( userData ) => {
        if ( userData ) {
          dispatch( login( { userData } ) )
        } else {
          dispatch( logout() )
        }
      } )
      .finally()
  }, [] )

  return !loading ? ( <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
        TODO:  {/*<outlet/> DOM */ }
      </main>
      <Footer />
    </div>
  </div> )
    : <h1>NULLL....</h1>;

  // return (
  //   <>
  //     <h1>Here we are...!!!</h1>
  //   </>
  // )
}

export default App
