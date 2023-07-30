<script lang="ts">
  import '../app.css';
  import HamburgerOpenIcon from 'virtual:icons/mdi/hamburger-open';
  import HamburgerIcon from 'virtual:icons/mdi/hamburger-menu';
  import { fade } from 'svelte/transition';

  let innerWidth = 0;
  let headerHeight = 0;
  let isSidebarOpened = innerWidth >= 769;
</script>

<svelte:window bind:innerWidth />

<div>
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
        on:click={() => (isSidebarOpened = !isSidebarOpened)}
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
						hover:underline
						tablet:text-3xl
						laptop:text-5xl"
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
      class={`hidden laptop:flex laptop:flex-col flex-shrink-0 laptop:sticky h-[70vh] w-0 opacity-0 scroll-mt-5
				border-2 border-primary rounded-r-lg shadow-md shadow-primary mt-5
				transition-all ease-out duration-200`}
      class:expanded={isSidebarOpened}
      style={`top: calc(${headerHeight}px + 1.25rem);`}
    >
      {#if isSidebarOpened}<a
          href="/flash/frontend-developer"
          in:fade={{ duration: 100, delay: 0 }}
          out:fade={{ duration: 100, delay: 0 }}
        >
          Frontend Developer
        </a>
      {/if}
      {#if isSidebarOpened}
        <a
          href="/flash/backend-developer"
          in:fade={{ duration: 100, delay: 100 }}
          out:fade={{ duration: 100, delay: 0 }}
        >
          Backend Developer
        </a>
      {/if}
    </nav>
    <div class="">
      <slot />
    </div>
  </div>
</div>

<style lang="postcss">
  .expanded {
    transition: ease-out 200ms;
    width: 200px;
    opacity: 1;
  }
  :global(body) {
    background-color: theme(colors.surface);
    font-family: theme(fontFamily.primary);
  }
</style>
