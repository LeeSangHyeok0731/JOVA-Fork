import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import InfoBox from "./infoBox";
import Header from "../../components/Header";

function Detail() {
  const location = useLocation();
  const { userName, title, date, content } = location.state || {}; // 전달된 데이터 수신

  return (
    <div>
      <Helmet>
        <title>JOVA | {title}</title>
      </Helmet>
      <Header />
      <InfoBox
        Name={userName}
        Title={title}
        TimeDate={date}
        Contents={content}
      />
    </div>
  );
}

export default Detail;
