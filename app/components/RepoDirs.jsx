import React from "react";
import Link from "next/link";

async function fetchRepoContent(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/majid-2002/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContent(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              href={`https://github.com/majid-2002/${name}/tree/main/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
