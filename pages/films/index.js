import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";

export const myLoader = ({ src, quality }) => {
  return `${src}&q=${quality || 50}`;
};

export default function FilmsList({ films }) {
  const [filmsList, setFilmsList] = useState([]);
  const [sortByRating, setSortByRating] = useState(false);
  const [sortByTitle, setSortByTitle] = useState(false);

  const styles = {
    nonActive:
      "rounded-lg mx-2 bg-gray-800 px-3 py-4 shadow-lg border-gray-700 border",
    active:
      "rounded-lg mx-2 bg-gray-800 px-3 py-4 shadow-lg border-gray-700 border border-green-500",
  };

  useEffect(() => {
    setFilmsList(films);
  }, []);

  const handleTitleSort = (e) => {
    e.preventDefault();
    setSortByTitle(!sortByTitle);
    setSortByRating(false);
    if (sortByTitle) {
      setFilmsList(filmsList.sort((a, b) => a.title.localeCompare(b.title)));
    } else {
      setFilmsList(filmsList.sort((a, b) => b.title.localeCompare(a.title)));
    }
  };

  const handleRatingSort = (e) => {
    e.preventDefault();
    setSortByRating(!sortByRating);
    setSortByTitle(false);
    if (sortByRating) {
      setFilmsList(
        filmsList.sort((a, b) => {
          return a.rt_score - b.rt_score;
        })
      );
    } else {
      setFilmsList(
        filmsList.sort((a, b) => {
          return b.rt_score - a.rt_score;
        })
      );
    }
  };

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="flex justify-end mx-3">
        <button
          className={sortByRating ? styles.active : styles.nonActive}
          onClick={handleRatingSort}
        >
          Sort By Rating
        </button>
        <button
          className={sortByTitle ? styles.active : styles.nonActive}
          onClick={handleTitleSort}
        >
          Sort By Title
        </button>
      </div>
      <div className="flex justify-center w-full">
        <div className="grid max-w-7xl mx-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {filmsList.map((film) => (
            <Link href={`/films/${film.id}`}>
              <div className="bg-gray-800 shadow-md border border-gray-700 rounded-lg max-w-sm hover:scale-105 ease-in duration-200">
                <Image
                  loader={myLoader}
                  className="rounded-t-lg"
                  src={film.movie_banner}
                  alt={film.title}
                  width={854}
                  height={480}
                />

                <div className="p-5">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    {film.title}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://ghibliapi.herokuapp.com/films");
  const films = res.data;
  return {
    props: {
      films,
    },
  };
}
