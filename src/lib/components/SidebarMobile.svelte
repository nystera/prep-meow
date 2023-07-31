<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { cubicInOut } from 'svelte/easing';

  import { page } from '$app/stores';
  import navRoutes from '$lib/constants/navRoutes';
  import { trapFocus } from '$lib/utils/index';

  import CloseIcon from '~icons/mdi/close';

  export let show = false;

  const ANIMIATON_DURATION = 250;

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      show = false;
    }
  }

  onMount(() => {
    console.log('route is', $page.route);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  });
</script>

{#if show}
  <nav
    class="fixed top-0 left-0 h-full w-1/2 z-10 bg-surface
    shadow-2xl shadow-primary border-y-2 border-r-2 rounded-r-2xl border-primary
    flex flex-col pt-5"
    use:trapFocus
    transition:fly={{
      x: '-50vw',
      opacity: 1,
      easing: cubicInOut,
      duration: ANIMIATON_DURATION
    }}
  >
    <div class="flex justify-center pb-5">
      <button
        class="p-1 rounded-full scale-100 border-2 border-primary"
        on:click={() => {
          show = false;
        }}
      >
        <CloseIcon />
      </button>
    </div>
    {#each navRoutes as route}
      <a
        href={route.path}
        on:click={() => (show = false)}
        class={`${$page.url.pathname.includes(route.path) && ''}`}
      >
        {route.name}
      </a>
    {/each}
  </nav>
{/if}

<!--
  We separate the components render even though
  they are in the same file because we want to
  animate them separately.
-->
{#if show}
  <button
    class="fixed top-0 right-0 h-full w-full backdrop-blur bg-black/20 z-0"
    on:click={() => (show = false)}
    in:fade={{ duration: ANIMIATON_DURATION }}
    out:fade={{ duration: ANIMIATON_DURATION }}
  />
{/if}

<style lang="postcss">
  .active {
    @apply bg-black;
  }
</style>
