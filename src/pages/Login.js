
import React,{useState} from 'react' 

export const Login = () =>{
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
  
    const submitThis = (e) => {
      e.preventDefault();
      // Your form submission logic goes here
    };
  
    return (
      <div className="card">
        <form action="" onSubmit={submitThis}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input
              type="password" 
              name="passw"
              id="passw"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}