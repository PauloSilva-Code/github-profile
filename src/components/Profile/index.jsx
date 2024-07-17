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
        src="https://avatars.githubusercontent.com/u/133034863?v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/PauloSilva-Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubState.user.html_url}
            </a>
          </S.WrapperUsername>
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
