import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from '../Home.js'
export default function Header() {
  return (
<>
<nav className='navbar navbar-expand-md bg-dark navbar-dark fixed-top '>
      <div className='container-fluid '>
      
        <a className='navbar-brand'>PinoyCoder</a>
          <form className='d-flex w-50 ms-2'>
        <div className='input-group'>
          <input
            className='form-control'
            type='search'
            placeholder='Search....'>
          </input>
          <button type='submit' className='btn btn-primary'>Search</button>
          </div>
          </form>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#menuBar"
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse ms-5' id='menuBar'>
          {/*this is navbar */}
          <ul className='navbar-nav ms-auto px-5'>
            <li className='nav-item '>
              <a className='nav-link' href="#">Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>Learn</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Contact</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#portfolio'>Portfolio</a>
            </li>
          </ul>

        </div>
        </div>
    </nav>
    <section className='bg-dark text-light p-5 text-center mt-4'>
      <div className='container'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div>
            <h1>Become a <span className='text-warning'>Full-Stack Developer</span> </h1>
            <p className='lead mx-4'>Full-stack development is a continuous
               learning process. Every new concept you encounter,
                whether it's front-end frameworks or back-end technologies,
                 is an opportunity to grow and expand your skill set. Embrace it!
            </p>
            <button className='btn btn-danger'>Subscribe Now!</button>

          </div>
          <img src='/image/logo.webp' className='img-fluid rounded-circle d-none d-sm-block' style={{width:'60vh'}}></img>
        </div>
      </div>
    </section>

  <section className='bg-primary text-light'>
    <div className='container p-2'>
      <div className='d-md-flex flex-lg-row d-md-row justify-content-between align-items-center'>
        <h2 className='mb-3 mb-md-0 mb'>Sign Up for Our NewsLetter</h2>
        <div className='input-group'>
          <input 
          className='form-control'placeholder='Enter your Email'></input>
          <button className='btn btn-dark'>Button</button>
        </div>
      </div>
    </div>
  </section>

  <section  className='p-5'>
    <div className='container'>
       <div className='row text-center g-4'>
         <div className='col-md'>
          <div className='card bg-dark text-light'>
            <div className='card-body text-center'>
              <div className='h1 mb-3'>
                <i className='bi bi-laptop'></i>
              </div>
              <h1 className='card-title'>Hybrid</h1>
              <p className='card-text'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel
              </p>
              <a className='btn btn-primary' href='#'>Read More</a>
            </div>
          </div>
         </div>
         <div className='col-md'>
          <div className='card bg-dark text-light'>
            <div className='card-body text-center'>
              <div className='h1 mb-3'>
                <i className='bi bi-file-person'></i>
              </div>
              <h1 className='card-title'>Hybrid</h1>
              <p className='card-text'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel
                </p>
                <a className='btn btn-primary' href='#'>Read More</a>
            </div>
          </div>
         </div>
         <div className='col-md'>
          <div className='card bg-dark text-light'>
            <div className='card-body text-center'>
              <div className='h1 mb-3'>
                <i className='bi bi-people'></i>
              </div>
              <h1 className='card-title'>Hybrid</h1>
              <p className='card-title'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel 
                </p>
                <a className='btn btn-primary'>Read More</a>
            </div>
          </div>
         </div>
       </div> 
     </div>
  </section>

  <section id='about' className='p-5'>
    <div className='container'>
      <div className='row align-items-center justify-content-between '>
        <div className='col-md'>
          <img className='img-fluid' src='./image/fundamental.jpg'></img>
        </div>
        <div className='col-md'>
          <h2 className=''>Learn The Fundamental</h2>
          <p className='lead'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel 
          </p>
          <a className='btn btn-warning'>Read More</a>
        </div>
      </div>
    </div>
  </section>

  <section  className='pt-5 bg-dark text-light' >
    <div className='container'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-md'>
          <h2 className=''>Learn React</h2>
          <p className='lead'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel 
                </p>
                <p className='lead'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel 
                </p>
                <a className='btn btn-warning'>Read More</a>
        </div>
        <div className='col-md'>
        <img src='./logo512.png' className='img-fluid '></img>
        </div>
      </div>
    </div>
  </section>
  
  <section className='p-5'>
    <div className='container '>
      <h1 className='text-center mb-4'>Frequently Asked Questions</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
  </section>

  <section className='p-5 bg-primary text-light'>
    <div className='container'>
      <h2 className='text-center'>Our Programmer</h2>
      <p className='lead text-center'>I want to be a professional programmer</p>
      <div className='row g-5'>
        <div className='col-md-6 col-lg-3'>
          <div className='card bg-light'>
            <div className='card-body text-center'>
              <img src='./image/profile.jpg ' className='rounded-circle img-fluid w-50'></img>
              <h2 className='card-title'>Jay-Vee</h2>
              <p className='card-text'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque ac erat dolor.
                Aenean varius dolor vel </p>

               <a className='bi bi-facebook mx-1 text-dark'></a>
                <a className='bi bi-twitter mx-1 text-dark'></a>
                <a className='bi bi-youtube mx-1 text-dark'></a>
                <a className='bi bi-instagram mx-1 text-dark'></a>
              
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>

  <section className='p-5 '>
    <div className='container'>
      <h2 className='text-center'>Contact Info</h2>
      <div className='row g-4'>
       <div className='col-md'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='fw-bold'>Main Location:</span>
            Lutucan Bata Sariaya Quezon
          </li>
          <li className='list-group-item'>
            <span className='fw-bold'>Phone Number:</span>
            09913084418
          </li>
          <li className='list-group-item'>
            <span className='fw-bold'>Email:</span>
            bjayvee31@gmail.com
          </li>
          <li className='list-group-item'>
            <span className='fw-bold'>Main Location:</span>
            Lutucan Bata Sariaya Quezon
          </li>
          <li className='list-group-item'>
            <span className='fw-bold'>Main Location:</span>
            Lutucan Bata Sariaya Quezon
          </li>
        </ul>
       </div>
       <div className='col-md'>
        <img src='./image/image.png' className='img-fluid img-thumbnail' ></img>
       </div>
      </div>
    </div>
  </section>

 <footer className=' p-5 bg-dark text-white text-center'>
<div className='container'>
  <p className='lead'>Copyright &copy; 2023 Future Full Stack Developer</p>
  
</div>
 </footer>
 
    </>
  );
}

