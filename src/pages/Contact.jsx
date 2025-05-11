
const Contact = () => {
  return (
    <div className="my-5">
      <div className="text-center my-5">
        <h3>Contact Me</h3>
      <p>Please contact me directly at NeerajNero9066@gmail.com or through this form.</p>
      </div>
      <div className="d-flex justify-content-center">
      <form className="col-md-6">
        <input className="form-control my-3" placeholder="You'r Email" type="email"/>
        <textarea className="form-control my-3" placeholder="Your Message" rows={10}/>
        <button className="btn btn-primary"><span className="bi bi-send"></span> Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
