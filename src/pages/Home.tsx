import React from "react";
import CategoryPreview from "../components/CategoryPreview";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <CategoryPreview
        header="Populares"
        fetchUrl={`https://yts.mx/api/v2/list_movies.json?sort_by=donwload_count&limit=50`}
      />
    </div>
  );
}

export default Home;
