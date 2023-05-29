import type { NextPage } from "next";
import Link from "next/link";
import { css, cx } from "linaria";
import { interviews } from "../src/data/interviews";

const Interview: NextPage = () => {
  return (
    <div>
      <h3 className="mb-2 text-lg font-bold">インタビュー一覧</h3>
      <ul className="list-disc">
        {interviews.map((e) => {
          return (
            <li key={e.id}>
              <Link href={e.link}>
                <a target="_blank" className="text-blue">
                  {e.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Interview;
