import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { myLoader } from "./index";

export default function Film({ film }) {
  const styles = {
    green: {
      color: "bg-green-500 py-1 px-2 rounded text-white text-sm",
    },
    red: {
      color: "bg-red-500 py-1 px-2 rounded text-white text-sm",
    },
    yellow: {
      color: "bg-yellow-500 py-1 px-2 rounded text-white text-sm",
    },
  };

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="flex justify-start mb-4">
        <Link href="/films">
          <button className="rounded-lg mx-2 bg-gray-800 px-4 py-3 shadow-lg border-gray-700 border">
            Back
          </button>
        </Link>
      </div>
      <div className="md:flex no-wrap md:-mx-2">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-gray-800 p-3 rounded-lg shadow-xl">
            <div className="image overflow-hidden">
              <Image
                loader={myLoader}
                className="h-auto w-full mx-auto"
                src={film.image}
                alt={film.title}
                width={1200}
                height={1600}
              />
            </div>
          </div>
          <div className="my-4" />
          <div className="bg-gray-800 p-3 rounded-lg shadow-xl">
            <h1 className="text-gray-100 font-bold text-xl leading-8 my-1">
              {film.title}
            </h1>
            <h3 className="text-gray-300 font-lg text-semibold leading-6">
              Original Title: {film.original_title} <br />
              Romanized Title: {film.original_title_romanised} <br />
              Release Year: {film.release_date} <br />
              Running Time: {film.running_time} minutes <br />
            </h3>
            <ul className="bg-gray-600 text-gray-300 hover:text-gray-400 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Score</span>
                <span className="ml-auto">
                  <span
                    className={
                      film.rt_score <= 30
                        ? styles.red.color
                        : film.rt_score <= 70
                        ? styles.yellow.color
                        : styles.green.color
                    }
                  >
                    {film.rt_score}
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>
                  Director: {film.director} <br />
                  Producer: {film.producer}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64">
          <div className="bg-gray-800 p-3 rounded-lg shadow-xl divide-y">
            <div>
              <p>
                <span className="text-gray-100 font-bold text-xl leading-8 my-6">
                  Synposis:
                </span>
              </p>
            </div>
            <div>
              <h1 className="text-gray-100 font-lg text-lg leading-8 my-4">
                {film.description}
              </h1>
              <p>
                <span className="text-gray-100 font-bold text-xl leading-8 my-4">
                  Movie Banner:
                </span>
              </p>
            </div>
            <div>
              <div className="mt-6 image overflow-hidden">
                <Image
                  className="h-auto w-full mx-auto"
                  loader={myLoader}
                  src={film.movie_banner}
                  alt={film.title}
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
  const film = res.data;
  return {
    props: {
      film,
    },
  };
}
