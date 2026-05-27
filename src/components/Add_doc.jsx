import React from 'react'

function Add_doc() {
  return (
    <div className='adddoctor'>
      <h1>Add New Doctor</h1>
        <div className='data'>
            <form action="">
                <input type="text" placeholder='Enter Your Name'/>
                <input type="text" placeholder='Enter Your Age' />
                <select name="" id="">
                    <option value="">Select Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option> 
                </select>
                <input type="text" placeholder='Enter Your Specialization' />
                <input type="text" placeholder='Enter Salary' />
                <button>Add Doctor</button>
            </form>
        </div>
    </div>
  )
}

export default Add_doc
