<script lang="ts">
  import FlashCard from '$lib/components/FlashCard.svelte';
  export let data;
</script>

<div class="flex flex-col items-center w-full">
  <h1 class="text-primary text-4xl tablet:4xl desktop:text-6xl">
    {data.title}
  </h1>
  <div class="card-stack">
    {#each data.cards as card}
      <div>
        <FlashCard />
      </div>
    {/each}
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .card-stack > *:nth-child(1) {
    z-index: 5;
    transform: translateY(0);
  }

  .card-stack > *:nth-child(2) {
    z-index: 4;
    transform: translateY(5px) scaleX(0.98);
  }

  .card-stack > *:nth-child(3) {
    z-index: 3;
    transform: translateY(10px) scaleX(0.96);
  }
  .card-stack > *:nth-child(4) {
    z-index: 2;
    transform: translateY(15px) scaleX(0.94);
  }
  .card-stack > *:nth-child(5) {
    z-index: 1;
    transform: translateY(20px) scaleX(0.92);
  }
</style>
