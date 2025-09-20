<script lang="ts">
  import { FirebaseApp, firekitAuth, firekitUser } from "svelte-firekit"
  import { auth } from "$firebase"
  import { onAuthStateChanged } from "@firebase/auth"

  const user = $derived(firekitUser.user)

  let isAdmin = $state(false)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      user
        .getIdTokenResult()
        .then(({ claims }) => (isAdmin = claims.admin as boolean))
        .catch(console.error)
    } else {
      isAdmin = false
    }
  })

  let { children } = $props()
</script>

<FirebaseApp>
  <header class="flex flex-row items-center p-2">
    {#if user}
      <button class="btn btn-primary" onclick={() => firekitAuth.signOut()}> sign out </button>
    {:else}
      <button class="btn btn-primary" onclick={() => firekitAuth.signInWithGoogle()}>
        sign in with google
      </button>
    {/if}
  </header>

  {#if user && isAdmin}
    {@render children()}
  {/if}
</FirebaseApp>
