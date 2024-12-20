import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import boba from './Images/boba_landscape.png'
import './Home.css'

function Home() {

    useEffect(() => {
        document.title = 'Java Loco - Home';
      }, []);

  return (
    <div>
        <div className='header-section'>
            <div className='container'>
                <Navbar/>
                <div className='header-text'>
                    <h1>Order our Coffee Now!</h1>
                    <p>Experience the rich, aromatic flavors of our freshly brewed coffee.</p>
                    <a href="/Checkout" className='btn'>Check Out</a>
                </div>
            </div>
        </div>

        <div className='middle-section'>
            <div className='container'>
                <div className='carousel'>
                    <div className='slider'>

                    </div>
                    <div className='btn-align'>
                        <button className='form-btn'>Order Here</button>
                    </div>
                </div>

                <div className='boba'>
                    <div className='col-1'>
                        <h1>Try Our New Flavors!</h1>
                        <p>Discover unique and vibrant new flavors, hand-selected to bring a fresh twist to your coffee experience. From fruity infusions to decadent creamy blends,
                        there's something for every adventurous palate.</p>
                    </div>
                    <div className='col-2'>
                        <img src={boba} alt="boba-landscape" />
                    </div>
                </div>

                <div className='contact' id='contact'>
                    <div className='left'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='right'>
                        <form>
                            <input type="text" name="Name" placeholder="Name" required/>
                            <input type="email" name="Email" placeholder="Email" required/>
                            <textarea name="Message" rows="6" placeholder="Message"></textarea>
                            <button type="submit" class="form-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Home