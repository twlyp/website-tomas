<script lang="ts">
  import { FirebaseApp, firekitUser } from "svelte-firekit"
  import { auth } from "$firebase"
  import { onAuthStateChanged } from "@firebase/auth"
  import LoginLogoutButton from "$components/LoginLogoutButton.svelte"

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
    <LoginLogoutButton {user} />
  </header>

  {#if user && isAdmin}
    {@render children()}
  {/if}
</FirebaseApp>
