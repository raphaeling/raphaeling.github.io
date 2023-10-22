import Footer from '@/components/root/footer';
import NavBar from '@/components/root/navbar';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      <header className='bg-lightest relative'>
        <NavBar />
      </header>
      <main className='justify-center px-12 md:px-24 pb-24 pt-64 text-lg'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
