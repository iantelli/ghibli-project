import axios from "axios";

export default function Film({ film }) {
  console.log(film);

  return (
    <div className="container mx-auto">
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <img src={film.image} alt={film.title} />
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
