// In a React component or a service file
import { useDispatch, useSelector } from "react-redux";

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Access the user object

  const handleUpdateProfile = () => {
    dispatch({ type: "UPDATE_USER_PROFILE", payload: { name: "Jane Doe" } });
  };

  return (
    <div>
      {user && <p>Welcome, {user.name}</p>}
      <button onClick={handleUpdateProfile}>Update Name</button>
    </div>
  );
}

export default User;
