import React,{useState} from 'react'


const Contact = () => {

    const [name,setName]=useState('');
    const [phone, setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [message, setMessage]=useState('');
    

    const handleName=(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handlePhone=(e)=>{
        console.log(e.target.value);
        setPhone(e.target.value);
    }

    const handleEmail=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleMessage=(e)=>{
        console.log(e.target.value);
        setMessage(e.target.value);
    }
  return (

    <div>
        <section className='py-4 bg-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>Contact Us</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>Home / Contact Us</h6>
            </div>
          </div>
        </div>
    </section>

      <section className='section'>
        <div className='container'>
            <div className='card shadow'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6>Contact Form</h6>
                            <hr />
                            <form action='' >
                            <div className='form-group'>
                                <label className='mb-1'>Full Name</label>
                                <input type='text' className='form-control' onChange={handleName} placeholder='Enter Full Name'/>
                            </div>
                            <div className='form-group'>
                                <label className='mb-1'>Phone Number</label>
                                <input type='text' className='form-control' onChange={handlePhone} placeholder='Enter Full Name'/>
                            </div>
                            <div className='form-group'>
                                <label className='mb-1'>Email Address</label>
                                <input type='text' className='form-control' onChange={handleEmail} placeholder='Enter Full Name'/>
                            </div>
                            <div className='form-group'>
                                <label className='mb-1'>Message</label>
                                <textarea rows="3" className='form-control' onChange={handleMessage} placeholder="Type your message.."></textarea>
                            </div>
                            <div className='form-group py-3'>
                                <button type='button' className='btn btn-primary shadow w-100'>Send Message</button>
                            </div>
                            </form>
                        </div>
                        <div className='col-md-6 border-start'>
                            <h5 className='main-heading'>Address Information</h5>
                            <div className='underline'></div>
                            <p>
                                {name}
                            </p>
                            <p>
                                {phone}
                            </p>
                            <p>
                                {email}
                            </p>
                            <p>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact