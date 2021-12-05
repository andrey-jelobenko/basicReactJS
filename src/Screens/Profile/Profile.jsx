import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { message, checkName } = useSelector(profileSelector);

  const handleTogglecheckName = () => {
    dispatch(toggleUserNameAction());
  };
  return (
    <>
      <Checkbox onClick={handleTogglecheckName} />
      <div>{checkName && message}</div>
    </>
  );
};
