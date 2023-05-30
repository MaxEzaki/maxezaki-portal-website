import Link from "next/link";
import { interviews } from "../_data/interviews";

const Page = () => {
  return (
    <div className="px-6">
      <h3 className="mb-2 text-lg font-bold">インタビュー一覧</h3>
      <ul className="list-disc">
        {interviews.map((e) => {
          return (
            <li key={e.id}>
              <Link href={e.link} target="_blank" className="text-blue">
                {e.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
