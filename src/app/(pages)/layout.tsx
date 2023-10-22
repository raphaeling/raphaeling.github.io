import Footer from '@/components/root/footer';
import NavBar from '@/components/root/navbar';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      <NavBar />
      <main className='justify-center px-12 md:px-24 py-28 text-lg'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
