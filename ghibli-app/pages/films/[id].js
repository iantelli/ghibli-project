import axios from "axios";
import styles from "../../styles/Home.module.css";

export default function Film({ film }) {
  console.log(film);

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1">
          <img src={film.image} alt={film.title} />
        </div>
        <div className="flex-1">
          <h1 className={styles.title}>{film.title}</h1>
          <p className={styles.description}>{film.description}</p>
        </div>
        <p> {film.rt_score} </p>
        <p>{film.director}</p>
        
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
