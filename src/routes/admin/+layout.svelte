<script lang="ts">
  import { FirebaseApp } from "svelte-firekit"
  import LoginLogoutButton from "$lib/components/AdminLoginLogoutButton.svelte"
  import { PAGES } from "$lib/constants"
  import { page as sveltePage } from "$app/state"
  import { firebaseUser } from "$lib/firebaseUser.svelte"

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
        {#if firebaseUser.isAdmin}
          <ul class="flex flex-row gap-3">
            {#each links as { href, pageName }}
              <li>
                <a {href} class="link link-hover {sveltePage.route.id === href ? 'font-bold' : ''}">
                  {pageName}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      <div class="navbar-end">
        <LoginLogoutButton />
      </div>
    </nav>
  </header>

  {#if firebaseUser.isAdmin}
    {@render children()}
  {/if}
</FirebaseApp>
