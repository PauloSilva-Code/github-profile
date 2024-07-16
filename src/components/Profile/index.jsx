import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <img
        src="https://avatars.githubusercontent.com/u/133034863?v=4"
        alt="Avatar of user"
      />
      <h1>Paulo Silva</h1>
      <h3>Username: </h3>
      <span>Paulo</span>
      <div>
        <h4>Followers</h4>
        <span>5</span>
      </div>
      <div>
        <h4>Starred</h4>
        <span>5</span>
      </div>
      <div>
        <h4>Followings</h4>
        <span>5</span>
      </div>
    </S.Wrapper>
  );
};

export default Profile;
