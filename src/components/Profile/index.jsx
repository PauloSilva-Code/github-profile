import { useEffect } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styles";

const Profile = () => {
  const { githubState } = useGithub();

  useEffect(() => {
    console.log(githubState.user);
  }, [githubState.user]);

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar}
        alt={githubState.user.name}
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username: </h3>
            <a
              href="https://github.com/PauloSilva-Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubState.user.name}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company: </h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location: </h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog: </h3>
            <a
              href={githubState.user.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
