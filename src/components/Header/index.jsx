import { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styles";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const handleSubmitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder="Digite o username para pesquisa..."
        onChange={(event) => setUsernameForSearch(event.target.value)}
      />
      <button type="submit" onClick={handleSubmitGetUser}>
        Search
      </button>
    </S.Wrapper>
  );
};

export default Header;
