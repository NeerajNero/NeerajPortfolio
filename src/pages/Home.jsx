
const Home = () => {
  return (
    <div className='text-center py-3'>
      <img className='rounded-circle border-3 border-white' src='/profile.jpg'/>
      <div className="mt-4">
        <h3>Hi, I'm <strong>Neeraj</strong> — a full-stack developer. <br/>
I build efficient, user-focused web apps with<br/><strong>React, Node.js, MongoDB, and more.</strong><br/>Always shipping solutions that solve real problems.</h3>
      </div>
      <div className="d-flex gap-3 justify-content-center mt-3">
        <a href="https://github.com/NeerajNero" className="btn btn-dark btn-lg"><span className="bi bi-github"></span> github</a>
        <a href="https://www.linkedin.com/in/neeraj-sharma-13610716a/" className="btn btn-primary btn-lg"><span className="bi bi-linkedin"></span> Linkedin</a>
      </div>
    </div>
  )
}

export default Home
