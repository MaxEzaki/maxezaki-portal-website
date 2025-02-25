import { movies } from "../../_data/movies";
import CardMovie from "../../_components/card-movie";

const Page = () => {
  return (
    <>
      {movies.map((e) => (
        <CardMovie list={e} key={e.id} />
      ))}
    </>
  );
};

export default Page;
