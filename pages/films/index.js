import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export const myLoader = ({ src }) => {
  return `${src}`;
}

export default function FilmsList({ films }) {
  console.log(films);
  return (
    <div className="flex justify-center w-full">
      <div className="grid max-w-7xl mx-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {films.map((film) => (
          <Link href={`/films/${film.id}`}>
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 ease-in duration-200">
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
