import axios from "axios";

export default function Film({ film }) {
  console.log(film);

  return (
    <div className="container">
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <img src={film.movie_banner} alt={film.title} width={500} />
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
