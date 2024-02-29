import CardWrapper from "../_components/card-wrapper";
import ContentDetail from "./content";

const Detail = () => {
  return (
    <CardWrapper
      headerLabel="Hiển thị thông tin cá nhân đã đăng ký"
      backButton={{ label: "Đăng ký lại", href: "/information" }}
      title="Thông tin cá nhân"
    >
      <ContentDetail/>
    </CardWrapper>
  );
};

export default Detail;
