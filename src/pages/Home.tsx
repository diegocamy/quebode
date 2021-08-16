import CategoryPreview from "../components/CategoryPreview";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <CategoryPreview header="Populares" fetchUrl="/api/movies/discover" />
    </div>
  );
}

export default Home;
