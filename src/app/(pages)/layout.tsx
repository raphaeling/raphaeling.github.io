import Footer from '@/components/root/Footer';
import NavBar from '@/components/root/NavBar';
import PageLogo from '@/components/root/PageLogo';
import { Fragment } from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <header className='relative'>
        <NavBar />
        <PageLogo className='w-16 pt-12 lg:pt-20 pl-12 lg:px-24' />
      </header>
      <main className='justify-center px-12 lg:px-24 pb-24 text-lg'>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
