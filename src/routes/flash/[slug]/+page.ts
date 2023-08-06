import { slugToTitle } from '$lib/utils/index.js';
import type { Flash } from '../../api/flash/+server.js';

export async function load({ params, fetch }) {
  const cards: Flash[] = await fetch('/api/flash').then((r) => r.json());
  return {
    title: slugToTitle(params.slug),
    cards
  };
}
