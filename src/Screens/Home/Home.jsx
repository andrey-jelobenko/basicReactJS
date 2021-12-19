import { useSelector } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";

export const Home = () => {
  const { message } = useSelector(profileSelector);
  return (
    <>
      <h1>Домашняя страница</h1>
      {message}
    </>
  );
};
