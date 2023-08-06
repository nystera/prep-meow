<script lang="ts">
  import FlashCard from '$lib/components/FlashCard.svelte';
  export let data;
</script>

<div class="flex flex-col items-center w-full">
  <h1 class="text-primary text-4xl tablet:4xl desktop:text-6xl">
    {data.title}
  </h1>
  {#each data.cards as card}
    <FlashCard />
  {/each}
</div>
