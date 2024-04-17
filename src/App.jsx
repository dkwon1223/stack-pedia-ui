import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Information from "./Components/Information";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Information />
      </section>
      <Footer />
    </main>
  )
};

export default App;
