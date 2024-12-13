import '@mantine/core/styles.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { useMantineColorScheme } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

function App() {

  const { setColorScheme } = useMantineColorScheme();
  setColorScheme('dark')
  return (
    <>
     <div className='bg-black overflow-y-scroll h-screen fancy-scrollbar'>
    <div className="max-w-screen-3xl mx-auto h-fit ">
      <div>
      <Navbar />  
      </div>
      <div className="flex justify-center">
        {/* <div className="p-3"><SideBar api = {api}/></div> */}
       
        <div className="p-3">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="*" element ={<div className='text bg-green-800'>404 Not found</div>} />
          </Routes>
        </div>

        {/* <div className="p-3"><TheOtherSideBar api = {api}/></div> */}
      </div>
      
    </div>
    </div>
     
    </>
  )
}

export default App
