import RepoItem from "../RepoItem";
import * as S from "./styled";

const RepoList = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel>
        <RepoItem
          name="calculadora-partidas-rankeadas"
          linkToRepo="https://github.com/PauloSilva-Code/calculadora-partidas-rankeadas"
          fullName="paulo-silva-code/calculadora-partidas-rankeadas"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepoItem
          name="challenge-class-game"
          linkToRepo="https://github.com/PauloSilva-Code/challenge-class-game"
          fullName="paulo-silva-code/challenge-class-game"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default RepoList;
