<script lang="ts">
  import '../app.css';
</script>

<div>
  <header class="flex sticky top-0 bg-surface pt-5">
    <div
      class="flex w-full bg-surface-20 border-2 border-primary rounded-xl mx-5 p-4 justify-between items-center
			tablet:border-4"
    >
      <a
        class="absolute text-accent font-semibold text-2xl text-center translate-x-[0.1rem] translate-y-[0.1rem]
					hover:underline
					tablet:text-3xl
					laptop:text-5xl"
        href="/"
      >
        Flash Prep
      </a>
      <span
        class="text-white font-semibold text-2xl text-center
					tablet:text-3xl
					laptop:text-5xl"
      >
        Flash Prep
      </span>
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
      class="hidden laptop:block sticky top-32 w-1/3 min-w-[14rem] h-[70vh] border-2 border-primary rounded-r-lg"
    />
    <slot class="flex-[2]" />
  </div>
</div>

<style lang="postcss">
  :global(body) {
    background-color: theme(colors.surface);
    font-family: theme(fontFamily.primary);
  }
</style>
