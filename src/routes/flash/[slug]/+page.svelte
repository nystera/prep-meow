<script lang="ts">
  import { fly, crossfade, scale } from 'svelte/transition';
  import FlashCard from '$lib/components/FlashCard.svelte';
  import ThumbsDownIcon from '~icons/octicon/thumbsdown-16';
  import ThumbsUpIcon from '~icons/octicon/thumbsup-16';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';

  export let data;

  let cards = data.cards;
  let isAnimateRight = true;

  const handleGoNext = (isGood: boolean) => () => {
    isAnimateRight = isGood;
    const remaining = cards.slice(1);
    cards = remaining;
  };
</script>

<div class="flex flex-col items-center w-full gap-5">
  <h1 class="text-primary text-3xl tablet:4xl desktop:text-6xl">
    {data.title}
  </h1>
  <div class="w-full h-96 min-h-[65vh] pb-5">
    <div class="card-stack">
      {#each cards as card (card.id)}
        <div
          out:fly={{
            x: 200 * (isAnimateRight ? 1 : -1),
            duration: 500
          }}
          animate:flip={{ duration: 300, delay: 0, easing: quintOut }}
        >
          <FlashCard question={card.title} />
        </div>
      {/each}
    </div>
  </div>
  <div class="flex justify-between w-full">
    <button
      class="text-red-600 p-3 text-xl rounded-full border-2 border-red-600
      hover:bg-red-600 hover:text-white hover:scale-125 transition-all duration-300 ease-in-out"
      on:click={handleGoNext(false)}
    >
      <ThumbsDownIcon />
    </button>
    <button
      on:click={handleGoNext(true)}
      class="text-green-600 p-3 text-xl rounded-full border-2 border-green-600
        hover:bg-green-600 hover:text-white hover:scale-125 transition-all duration-300 ease-in-out"
    >
      <ThumbsUpIcon />
    </button>
  </div>
</div>

<style>
  .card-stack {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .card-stack > * {
    position: absolute;
    transition: transform 0.3s ease;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .card-stack > *:nth-child(1) {
    z-index: 5;
    transform: translateY(0px);
  }

  .card-stack > *:nth-child(2) {
    z-index: 4;
    transform: translateY(5px) scaleX(0.99);
  }

  .card-stack > *:nth-child(3) {
    z-index: 3;
    transform: translateY(10px) scaleX(0.98);
  }

  /* every other child be hidden after the 3rd child */
  .card-stack > *:nth-child(n + 4) {
    display: none;
  }
</style>
