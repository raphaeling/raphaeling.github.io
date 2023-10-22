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
      <main className='justify-center px-24 py-24'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
