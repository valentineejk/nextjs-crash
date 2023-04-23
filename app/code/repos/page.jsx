import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import Link from 'next/link';
import { resolve } from 'styled-jsx/css';

async function getRepo() {
    const res = await fetch('https://api.github.com/users/valentineejk/repos');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const repos =  await res.json();
    return repos;
}

const CodeRepos = async () => {

    const repos = await getRepo();

  return (
    <div className='repos-container' >
          <h1>Repositories</h1>
          <ul className="repo-list">
            {repos.map((repo) =>(
            <li key={repo.id} >
                <Link href={`/code/repos/${repo.name}`} >
                    <h3>{repo.name}</h3>
                    <p>{ repo.description }</p>
                <div className="repo-details">
                    <span>
                        <FaStar />{repo.stargazers_count}
                    </span>
                            <span>
                                <FaCodeBranch />{ repo.forks_count }
                            </span>
                            <span>
                                <FaEye />{ repo.watchers_count }
                            </span>
                </div>
                </Link>
            </li>
            ) )}
          </ul>
    </div>
  )
}

export default CodeRepos
