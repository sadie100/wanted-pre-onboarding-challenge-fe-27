import { NavLink } from 'react-router-dom'

const emailRegex = /^(?=.*@)(?=.*\.).*$/

export default function Login() {
  const handleSubmit = (event) => {
    const [email, password] = event.target.elements
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          pattern={emailRegex.source}
          required
        />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <NavLink to="/auth/signup">signup</NavLink>
    </div>
  )
}
