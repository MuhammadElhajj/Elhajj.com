import './Contact.css'
import { BiSend } from 'react-icons/bi'


function Contact () {
    return <div className='Contact'>
<h2 className='Contact__h2'>Contact</h2>
<p className='Contact__p'>I am currently available for freelance work</p>
<h3 className='Contact__h3'>Send Me A Message</h3>
<form action="" className='Contact__Form'>
    <div className='Contact__Form__INformation__Input'>
<input type="text" name="" id="" placeholder='Enter Your Name'/>
<input type="email" name="" id="" placeholder='Enter Your Email' />
    </div>
    <textarea name="" id="" placeholder='Enter Your Message' className='Contact__Textarea'></textarea>
    <button type='submit' className='Contact__Submit__Button'><span className='Contact__Submit__Button__Name'>Send Message</span><BiSend className='Contact__Submit__Button__Icon'/></button>
</form>
    </div>
}



export default Contact