import SkeletonRouter from './skeleton/router/SkeletonRouter';
import SkeletonNavbar from './skeleton/navbar/SkeletonNavbar';

import './App.css'


function App() {
  return (
    <div className='skeleton'>
      <div className='skeleton__navbar'>
        <SkeletonNavbar />
      </div>
      <div className='skeleton__router'>
        <SkeletonRouter />
      </div>
    </div>
  )
}

export default App
