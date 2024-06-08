import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'
import Footer from './components/AppFooter.tsx';
import Projects from './components/Projects.jsx';
import References from './components/References.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      
      <div className="flex-grow">
        <h1 className="text-2xl"></h1>
        
        <main className="pt-16">
                <Projects />
                <References/>
            </main>
      </div>
      <h3 className="text-2xl font-bold text-center mb-8">Skontaktuj się ze mną</h3>
      <Footer/>

    </div>
  )
}

export default App
