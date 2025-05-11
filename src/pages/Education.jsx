
const Education = () => {
  return (
    <div className="d-flex justify-content-center">
    <div className="flex-column">
      <h3 className="mb-3 text-center">My Education</h3>
      <div className="card mb-3 mt-5" style={{"maxWidth" : "1200px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/cmr.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">Bachelor of Computer Applications (BCA)</h2>
        <h4>CMR IMS - Bangalore</h4>
        <p className="card-text fs-5">CGPA: 8.0</p>
        <ul className="fs-5">
            <li>Major in computer science</li>
            <li>Minor in Networks & Security</li>
            <li>Minor in Mobile Applications</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Education
