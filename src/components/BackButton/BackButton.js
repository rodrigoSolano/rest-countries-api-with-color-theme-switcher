import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BackButton as Back } from "./BackButton.elements";

const BackButton = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Back onClick={() => goBack()}>
      <BiArrowBack />
      Back
    </Back>
  );
};

export default BackButton;
