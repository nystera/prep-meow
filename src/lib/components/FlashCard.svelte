<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  // export let question;
  // export let answer;

  export let className = '';
  export let question = '';
  export let index: number | undefined;

  const removalThreshold = 300;
  const dispatch = createEventDispatcher();

  function draggable(node: HTMLElement) {
    if (index !== 0) return;
    let moving = false;
    let initialX = 0;
    let diffX = 0;

    node.addEventListener('mousedown', (e) => {
      moving = true;
      initialX = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (moving) {
        diffX = e.clientX - initialX;
        node.style.transform = `
          translateX(${diffX}px)
          rotate(${diffX / 50}deg)
          `;
        node.style.opacity = `${Math.max(
          0.25,
          1 - Math.abs(diffX / removalThreshold)
        )}`;
      }
    });

    window.addEventListener('mouseup', () => {
      moving = false;
      if (Math.abs(diffX) > removalThreshold) {
        dispatch('dragOut');
      }
      node.style.transform = '';
      node.style.opacity = '';
      initialX = 0;
      diffX = 0;
    });
  }
</script>

<div
  use:draggable
  class={twMerge(
    `bg-surface-20 border-2 border-primary rounded-xl
    h-full w-full`,
    index !== 0 ? 'brightness-75' : '',
    index === 0 ? 'cursor-pointer' : '',
    className
  )}
>
  {question}
</div>
