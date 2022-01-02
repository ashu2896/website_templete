import React from 'react'


const heading = {
  width: "100%",
  height: "315px"
}

const size={
  height:"320px",
  marginTop:"20px",
    padding: "20px",
    marginLeft:'14px',
    marginRigth:'14px',
    width:'85%'

}

const font={
  height:'327px',
  marginTop:"20px",
    padding: "20px",
    marginLeft:'43px',
    marginRigth:'14px',
    width:'80%'

}

const sizes={
  height: '272px',
    marginTop: '20px',
    padding: '20px',
    marginLeft: '69px',
    width: '61%'
}

const navbar={
  height: '143px',
    background: 'cornflowerblue'
}

function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Images/images.jpg" style={heading} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Images/photo-1633113088983-12fb3b2fe0ac.jpg" style={heading} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="photo-1633113092754-523fd2d9a90c.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <h2>Products</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="Images/photo-1633113088983-12fb3b2fe0ac.jpg" style={size} alt="..." />
              <div class="card-body">
                
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="Images/photo-1606868306217-dbf5046868d2.jpg" style={size} alt="..." />
              <div class="card-body">
               
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="Images/photo-1633113092754-523fd2d9a90c.jpg" style={size} alt="..." />
              <div class="card-body">
               
              </div>
            </div>
          </div>
       
        </div>
      </div>
      <h2>Services</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="Images/photo-1518770660439-4636190af475.jpg" style={font} alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Images/photo-1488590528505-98d2b5aba04b.jpg"style={font}  alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Images/images.png" style={font} alt="..."/>
      <div class="card-body">
      
      </div>
    </div>
  </div>
 
</div>
       
<h2>Portfolio/Case Studies</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="Images/photo-1518770660439-4636190af475.jpg" style={sizes} alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Images/photo-1488590528505-98d2b5aba04b.jpg"style={sizes}  alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Images/images.png" style={sizes} alt="..."/>
      <div class="card-body">
      
      </div>
    </div>

    
  </div>
 
</div>
<h2>Developes On Demands</h2>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="Images/photo-1518770660439-4636190af475.jpg" style={sizes} alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Images/photo-1488590528505-98d2b5aba04b.jpg"style={sizes}  alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Images/images.png" style={sizes} alt="..."/>
      <div class="card-body">
      
      </div>
    </div>

    
  </div>
 
</div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid"  style={navbar}>
    <a class="navbar-brand"><h4>Technology Skill</h4>
    <p>Reference site about Lorem Ipsum, <br/>
      giving information on its origins, 
      as well as a random Lipsum generator</p>
    </a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<footer class="py-5">
    <div class="row">
      <div class="col-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-2">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

   
  </footer>

       
    </>
    
  )
}

export default Home
