import img1 from './assets/image(5).jpg'
import img2 from './assets/image(6).jpg'
import './App.css'
import Horizontal from './components/Horizontal.jsx'
import Rectanglecard from './components/Rectanglecard.jsx'
import Vertical from './components/Vertical.jsx'
import Square from './components/square'
// import words from './components/words.jsx'

function App() {

  return (
    <>
    <div className="container">
      <div className='bar'>
        <div><Vertical/></div>
 
      </div>
      <div className="side">
      <div className="sideContent">
      <div><Horizontal/></div>
      <div> <h1 className='trend'>Trending</h1></div>
      <div className="card">
      
        <div>
           <Rectanglecard
      image={img1}
      />
      </div>
        <div>
           <Rectanglecard
      image={img2}
      />
      </div>
        <div>
           <Rectanglecard
      image={img1}
      />
      </div>
     </div>

       </div>
      <div className="sideContent">
      
      <div> <h1 className='trend'>Recommendend Movies</h1></div>
      <div className="card">
      
        <div>
      <Square
      image={img2}
      />
     </div>
        <div>
      <Square
      image={img1}
      />
     </div>
        <div>
      <Square
      image={img2}
      />
     </div>
        <div>
      <Square
      image={img1}
      />
     </div>

       </div>
      <div className="sideContent">
      <div className="card">
      
      <div>
      <Square
      image={img1}
      />
     </div>
      <div>
      <Square
      image={img2}
      />
     </div>
      <div>
      <Square
      image={img1}
      />
     </div>
      <div>
      <Square
      image={img2}
      />
     </div>
      <div>
      <Square
      image={img2}
      />
     </div>
      <div>
      <Square
      image={img2}
      />
     </div>
      
     </div>

       </div>
       </div>
   
    </div>
    </div>
    </>
  )
}

export default App
