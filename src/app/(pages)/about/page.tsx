import { redirect } from 'next/navigation';

// Redirects to main page
export default async function Home() {
  redirect('/');
}
