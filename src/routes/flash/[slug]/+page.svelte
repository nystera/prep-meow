<script lang="ts">
  import FlashCard from '$lib/components/FlashCard.svelte';
  export let data;

  function handleDragout() {
    data.cards.shift();
    data = { ...data };
  }
</script>

<div class="flex flex-col items-center w-full p-10 max-w-7xl">
  <h1 class="text-primary text-4xl tablet:4xl desktop:text-6xl">
    {data.title}
  </h1>
  <div class="card-stack">
    {#each data.cards as card, i}
      <div>
        <FlashCard index={i} on:dragOut={handleDragout} question={card.title} />
      </div>
    {/each}
  </div>
</div>

<style>
  .card-stack {
    display: grid;
    width: 100%;
    height: 100%;
    & * {
      grid-area: 1 / 1;
    }
  }

  .card-stack > *:nth-child(1) {
    z-index: 5;
    transform: translateY(0);
  }
  .card-stack > *:nth-child(2) {
    z-index: 4;
    transform: translateY(2.5px) scaleX(0.99);
  }

  .card-stack > *:nth-child(3) {
    z-index: 3;
    transform: translateY(5px) scaleX(0.98);
  }
  .card-stack > *:nth-child(4) {
    z-index: 2;
    transform: translateY(7.5px) scaleX(0.97);
  }
  .card-stack > *:nth-child(5) {
    z-index: 1;
    transform: translateY(10px) scaleX(0.96);
  }
</style>
