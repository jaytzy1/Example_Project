import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand'>My Website</a>
   
 <form className='d-flex justify-content-center w-50'>
        <input 
        className='form-control' 
        type='search' 
        placeholder='Search....'>
        </input>
        <button type='submit' className='btn btn-primary'>Search</button>
       </form>
       
       <button 
       className='navbar-toggler'
       type='button'
       data-bs-toggle="collapse"
       data-bs-target="#menuBar"
       >
        <span className='navbar-toggler-icon'></span>
       </button>

 
       <div  className='collapse navbar-collapse' id='menuBar'>  
       {/*this is navbar */}
       <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Home</a>
        </li>
        <li className='nav-item'> 
          <a className='nav-link' href='#'>About</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Contact</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Portfolio</a>
        </li>
       </ul>

       </div>
      </div>
    </nav>
  );
}

