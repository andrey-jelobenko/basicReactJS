import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { message, showName } = useSelector(profileSelector);

  const handleToggleshowName = () => {
    dispatch(toggleUserNameAction());
  };
  return (
    <>
      <Checkbox onClick={handleToggleshowName} />
      <div>{showName && message}</div>
    </>
  );
};
