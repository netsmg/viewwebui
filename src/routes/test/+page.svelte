<script>
  import { auth } from '$lib/firebase';

  let email = '';
  let password = '';

  async function login() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect or perform any action after successful login
      window.location('/dashboard');
  }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>
  <button type="submit">Login</button>
</form>
