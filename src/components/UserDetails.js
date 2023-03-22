import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UserDetails = ({setStep}) => {

    const [user, setUser] = useState({
        "name":"",
        "email":""
    })

    const handleChange = (e) => {
        let newUser = {...user}
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(newUser);
    }

    const onSave = async (e) => {
        e.preventDefault();
        try {
          const result = await axios.post("http://localhost:3004/users", user);
          console.log(result.data);
        } catch (error) {
          console.error(error.response.data);
        }
        console.log(user);
        setStep(0);
      };

  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <h1>Hellooo!</h1>
                <h2 color='blue'>Please enter your details before attempting the quiz!</h2>
                <form>
                    <label htmlFor='name'>NAME: </label>
                    <input type='text' name='name' value={user.name} onChange={(e) => handleChange(e)}></input> <br/><br/>
                    <label htmlFor='email'>EMAIL: </label>
                    <input type='text' name='email' value={user.email} onChange={(e) => handleChange(e)}></input> <br/><br/>
                    <button className='button is-info is-medium' onClick={onSave}>SAVE</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserDetails