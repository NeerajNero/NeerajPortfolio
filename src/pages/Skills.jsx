
const Skills = () => {
  return (
    <div>
      <h3 className="mb-5">My Skills</h3>
      <div className="d-flex gap-5 flex-wrap" style={{"maxWidth": "600px"}}>
        <div id="logoHover">
            <img className="img-fluid" src="/techstacklogos/git.svg" style={{"height": "100px"}}/>
            <p className="fs-5">Git</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/bootstrap.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">Bootstrap</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/css.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">CSS</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/express.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">Express</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/html5.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">HTML</p>
        </div>
        <div id="logoHover">
            <img className="img-fluid" src="/techstacklogos/javascript.svg" style={{"height": "100px"}}/>
            <p className="fs-5">Javascript</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/mongodb.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">MongoDB</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/nodedotjs.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">Node.js</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/react.svg" className="img-fluid" style={{"height": "100px"}} />
            <p className="fs-5">React.js</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/redux.svg" className="img-fluid" style={{"height": "95px"}} />
            <p className="fs-5">Redux-Toolkit</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/socketdotio.svg" className="img-fluid" style={{"height": "90px"}} />
            <p className="fs-5">Socket.io</p>
        </div>
        <div id="logoHover">
            <img src="/techstacklogos/python.svg" className="img-fluid" style={{"height": "90px"}} />
            <p className="fs-5">Python</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
