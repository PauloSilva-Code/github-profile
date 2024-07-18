import * as S from "./styles";

const RepoItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name: </S.WrapperFullName>
      <S.WrapperLink
        href={linkToRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepoItem;
