export default function Home(){
   return(
    <section id="portfolio" className='bg-dark text-light p-5 text-center mt-4'>
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

   )
}