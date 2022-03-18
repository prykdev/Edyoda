import React,{useRef} from "react";


export const LoginPage = ({login}) => {
    const username = useRef('');
    const password = useRef('');

    
  return (
    <div>
     <div>LOGO</div>
        <form onSubmit={e =>{e.preventDefault();
        login(password.current.value);
        }}>
        <div className="container">
        <div>
          <h3>Login</h3>
        </div>
        <div>
            <input placeholder="Username" ref={username}/>
        </div>
        <div>
            <input placeholder="Password" ref={password}/>
        </div>
        <div>
            <button type="submit">LOGIN</button>
        </div>
      </div>
        </form>     
    </div>
  );
};

export default LoginPage;
