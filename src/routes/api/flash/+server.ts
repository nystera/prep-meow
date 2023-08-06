import { json } from '@sveltejs/kit';

export interface Flash {
  id: number;
  title: string;
}

export function GET() {
  return json([
    {
      id: 1,
      title: 'Flash 1'
    },
    {
      id: 2,
      title: 'Flash 2'
    },
    {
      id: 3,
      title: 'Flash 3'
    },
    {
      id: 4,
      title: 'Flash 4'
    },
    {
      id: 5,
      title: 'Flash 5'
    }
  ]);
}
