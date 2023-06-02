import styles from "./page.module.css";
import { interviews } from "../../_data/interviews";
import CardInterview from "../../_components/card-interview";

const Page = () => {
  return (
    <>
      {interviews.map((e) => (
        <CardInterview list={e} key={e.id} />
      ))}
    </>
  );
};

export default Page;
