import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((repo, key)=>(
      <div key = {key}>
        <h3>Repo name: {repo.name}</h3>
        <h5>Owner: {repo.owner}</h5>
        <strong>Stars: {repo.starsCount}</strong>
      </div>
    ))}
  </div>
)

export default RepoList;