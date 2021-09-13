import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header'
import Aside from './Component/Aside'
import Main from './Component/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-1'>
            <Aside/>
          </div>
          <div className='col-11'>
            <Main/>
          </div>
      </div>
      </div>  
    </div>

  );
}

export default App;
