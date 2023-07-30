<script lang="ts">
  import '../app.css';
  import HamburgerOpenIcon from 'virtual:icons/mdi/hamburger-open';
  import HamburgerIcon from 'virtual:icons/mdi/hamburger-menu';
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  let innerWidth = 0;
  const SIDE_BAR_WIDTH = 30;

  const sideBarWidth = tweened(SIDE_BAR_WIDTH, {
    duration: 500,
    easing: cubicOut
  });
  $: menuOpened = $sideBarWidth > 0;

  const openMenu = () => {
    sideBarWidth.set(SIDE_BAR_WIDTH);
  };

  const closeMenu = () => {
    sideBarWidth.set(0);
  };
</script>

<svelte:window bind:innerWidth />

<div>
  <header class="flex sticky top-0 bg-surface pt-5">
    <div
      class="flex w-full bg-surface-20 border-2 border-primary rounded-xl mx-5 p-4 justify-between items-center
			tablet:border-4"
    >
      <button
        class="text-xl laptop:text-3xl"
        on:click={() => (menuOpened ? closeMenu() : openMenu())}
      >
        {#if menuOpened}
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
          PrepMeow
        </a>
        <span
          class="text-white font-semibold text-2xl text-center
						tablet:text-3xl
						laptop:text-5xl"
        >
          PrepMeow
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
      class="hidden laptop:flex laptop:sticky flex-shrink-2 top-32 h-[70vh]
				border-2 border-primary rounded-r-lg shadow-md shadow-primary"
      style="width: {$sideBarWidth}rem;"
    />
    <div class="flex shrink-3">
      <slot />
    </div>
  </div>
</div>

<style lang="postcss">
  :global(body) {
    background-color: theme(colors.surface);
    font-family: theme(fontFamily.primary);
  }
</style>
