import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5>Contact Information</h5>
                        <ul className="list-unstyled">
                            <li>Email: <a href="mailto:talktopranay@gmail.com" className="text-white">talktopranay@gmail.com</a></li>
                        </ul>
                    </div>
        
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">© {new Date().getFullYear()} Pranay.</p>
                        <p className='mb-0 fw-bold'>Made by <a href='https://www.x.com/Pran4y' className='text-white'>
                        Pranay
                        </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

  )
}

export default Footer