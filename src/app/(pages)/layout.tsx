import Footer from '@/components/footer';
import NavBar from '@/components/navbar';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='container'>
      <NavBar />
      <main className='justify-center px-12 md:px-24 py-28'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
