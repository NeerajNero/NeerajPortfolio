
const Projects = () => {
  return (
    <div className="d-flex flex-column">
        <h3 className="mb-4">My Projects</h3>
        <div className="card mb-3" style={{"maxWidth": "1200px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/chatApp.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">JustUs! Chat App</h5>
        <p className="card-text">Real-Time Chat Application: Built a secure and scalable real-time chat app using the MERN stack. Implemented authentication with JWT, password hashing with bcrypt, and real-time communication using Socket.IO. Designed a responsive user interface with Tailwind CSS and DaisyUI, leveraging Context API for user management and Zustand.</p>
        <p className="card-text"><small className="text-body-secondary">Made With: MongoDB, Express, Reactjs, Nodejs, Socket.io, Zustand, TailwindCSS</small></p>
        <div className="d-flex gap-3 justify-content-center">
            <a href="https://github.com/NeerajNero/JustUs-ChatApp" className="btn btn-dark btn-lg"><span className="bi bi-github"></span> github</a>
        <a href="https://justus-chatapp-bter.onrender.com/" className="btn btn-primary btn-lg"><span className="bi bi-play"></span> Live</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{"maxWidth": "1200px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/emailDraft.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Email Draft Generator</h5>
        <p className="card-text">A productivity tool that auto-generates professional email drafts based on predefined templates. It speeds up customer support responses by allowing agents to insert key details and send consistent, accurate replies with just a few clicks.</p>
        <p className="card-text"><small className="text-body-secondary">Made With: MongoDB, Express, Reactjs, Nodejs, Redux-Toolkit, Bootstrap</small></p>
        <div className="d-flex gap-3 justify-content-center">
            <a href="https://github.com/NeerajNero/emailDraftGenerator" className="btn btn-dark btn-lg"><span className="bi bi-github"></span> github</a>
        <a href="https://email-draft-generator.vercel.app/" className="btn btn-primary btn-lg"><span className="bi bi-play"></span> Live</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{"maxWidth": "1200px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/matrixMemory.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Matrix Memory Game</h5>
        <p className="card-text">A fun and interactive memory game where players flip cards in a grid to find matching pairs, designed to improve focus and recall.</p>
        <p className="card-text"><small className="text-body-secondary">Made With: Reactjs, CSS</small></p>
        <div className="d-flex gap-3 justify-content-center">
            <a href="https://github.com/NeerajNero/MatrixMemoryGame" className="btn btn-dark btn-lg"><span className="bi bi-github"></span> github</a>
        <a href="https://matrix-memory-game.vercel.app/" className="btn btn-primary btn-lg"><span className="bi bi-play"></span> Live</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{"maxWidth": "1200px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/crmTool.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">CRM TOOL</h5>
        <p className="card-text">A fun and interactive memory game where players flip cards in a grid to find matching pairs, designed to improve focus and recall.</p>
        <p className="card-text"><small className="text-body-secondary">Made With: MongoDB, Express, Reactjs, Nodejs, Redux-Toolkit, Bootstrap</small></p>
        <div className="d-flex gap-3 justify-content-center">
            <a href="https://github.com/NeerajNero/ProjectGestionando" className="btn btn-dark btn-lg"><span className="bi bi-github"></span> github</a>
        <a href="https://project-gestionando.vercel.app/" className="btn btn-primary btn-lg"><span className="bi bi-play"></span> Live</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Projects
