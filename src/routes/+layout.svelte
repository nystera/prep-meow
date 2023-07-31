<script lang="ts">
  import '../app.css';
  import HamburgerOpenIcon from '~icons/mdi/hamburger-open';
  import HamburgerIcon from '~icons/mdi/hamburger-menu';
  import { fade } from 'svelte/transition';
  import SidebarMobile from '$lib/components/SidebarMobile.svelte';
  import navRoutes from '$lib/constants/navRoutes';

  let innerWidth = 0;
  let headerHeight = 0;
  let isSidebarMobileOpened = false;
  $: isSidebarOpened = innerWidth >= 769;
</script>

<svelte:window bind:innerWidth />

<header
  class="flex sticky top-0 bg-surface pt-5"
  bind:clientHeight={headerHeight}
>
  <div
    class="flex w-full bg-surface-20 border-2 border-primary rounded-xl mx-5 p-4 justify-between items-center
			tablet:border-4"
  >
    <button
      class="text-xl laptop:text-3xl"
      on:click={() => {
        // depending on the screen size, toggle the sidebar or the mobile sidebar
        if (innerWidth >= 769) {
          isSidebarOpened = !isSidebarOpened;
        } else {
          isSidebarMobileOpened = true;
        }
      }}
    >
      {#if isSidebarOpened}
        <HamburgerOpenIcon />
      {:else}
        <HamburgerIcon />
      {/if}
    </button>
    <div>
      <a
        class="absolute text-accent font-semibold text-2xl text-center translate-x-[0.1rem] translate-y-[0.1rem]
        tablet:text-3xl
        laptop:text-5xl laptop:hover:underline"
        href="/"
      >
        prep meow
      </a>
      <span
        class="text-white font-semibold text-2xl text-center
						tablet:text-3xl
						laptop:text-5xl"
      >
        prep meow
      </span>
    </div>
    <a
      href="/signup"
      class="bg-secondary text-primary rounded-xl p-2 border text-xs
				tablet:text-base tablet:p-3 tablet:border-2
				hover:bg-secondary-10 hover:border-black hover:font-semibold
				focus:bg-secondary-10
				active:bg-secondary-30"
    >
      login
    </a>
  </div>
</header>

<div class="flex gap-5">
  <nav
    class="hidden laptop:flex laptop:flex-col flex-shrink-0 laptop:sticky h-[70vh] w-0 opacity-0 scroll-mt-5
				border-2 border-primary rounded-r-lg shadow-md shadow-primary mt-5
				transition-all ease-out duration-200"
    class:expanded={isSidebarOpened}
    style={`top: calc(${headerHeight}px + 1.25rem);`}
  >
    {#each navRoutes as route}
      {#if isSidebarOpened}
        <a
          href={route.path}
          in:fade={{ duration: 100, delay: 0 }}
          out:fade={{ duration: 100, delay: 0 }}
        >
          {route.name}
        </a>
      {/if}
    {/each}
  </nav>
  <div class="">
    <slot />
  </div>
</div>

<SidebarMobile bind:show={isSidebarMobileOpened} />

<style lang="postcss">
  .expanded {
    @apply w-48 opacity-100 transition-all ease-out duration-200;
  }
</style>
