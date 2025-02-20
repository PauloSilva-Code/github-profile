import Header from "../Header";
import * as S from "./styles";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
