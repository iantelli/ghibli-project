import axios from "axios";
import Link from "next/link";

export default function FilmsList({ films }) {
  console.log(films);
  return (
    <div class="flex justify-center w-full">
      <div class="grid max-w-7xl mx-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {films.map((film) => (
          <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 ease-in duration-200">
            <Link href={`/films/${film.id}`}>
              <img
                class="rounded-t-lg"
                src={film.movie_banner}
                alt={film.title}
              />
            </Link>
            <div class="p-5">
              <Link href={`/films/${film.id}`}>
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  {film.title}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://ghibliapi.herokuapp.com/films");
  const films = res.data;
  return {
    props: {
      films,
    },
  };
}
