const RepoItem = ({ name, linkToRepo, fullName }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>full name: </h4>
      <a href={linkToRepo} target="_blank" rel="noopener noreferrer"></a>
      {fullName}
    </div>
  );
};

export default RepoItem;
