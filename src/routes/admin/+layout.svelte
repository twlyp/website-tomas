<script lang="ts">
  import { FirebaseApp, firekitUser } from "svelte-firekit"
  import { auth } from "$firebase"
  import { onAuthStateChanged } from "@firebase/auth"
  import LoginLogoutButton from "$components/LoginLogoutButton.svelte"
  import { PAGES } from "$constants"
  import { page as sveltePage } from "$app/state"

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

  const links = [
    { href: "/admin", pageName: "admin home" },
    ...Object.values(PAGES).map((page) => ({ href: `/admin/${page}`, pageName: page })),
  ]

  let { children } = $props()
</script>

<FirebaseApp>
  <header class="flex flex-row items-center p-2">
    <nav class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <ul class="flex flex-row gap-3">
          {#each links as { href, pageName }}
            <li>
              <a {href} class="link link-hover {sveltePage.route.id === href ? 'font-bold' : ''}">
                {pageName}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="navbar-end">
        <LoginLogoutButton {user} />
      </div>
    </nav>
  </header>

  {#if user && isAdmin}
    {@render children()}
  {/if}
</FirebaseApp>
