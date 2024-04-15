import Nav from './Nav/Nav';
import Hero from './Hero/Hero';
import Information from './Information/Information';
import Footer from './Footer/Footer';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Information />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;