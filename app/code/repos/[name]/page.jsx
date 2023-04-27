import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";


const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      {/* passing the repo component */}
      <Link href="/code/repos" className='btn btn-back'>Back To Repositories</Link>
      <Repo name={name} />
      <RepoDirs name={name}/>
    </div>
  );
};

export default RepoPage;
