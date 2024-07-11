import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import NameComponent from "./nameComponent/nameComponent";
import { nameSlice } from "./store/slices/nameSlice";
import Chance from "chance";
import { RootState } from "./store";

function App() {
  const names = useSelector((state: RootState) => state.names);
  const dispatch = useDispatch();

  const addUserFunc = (name: string) => {
    dispatch(nameSlice.actions.addUser(name));
  };

  const deleteAllUsersFunc = () => {
    dispatch(nameSlice.actions.deleteAllUsers());
  };

  const name = () => {
    const chance = new Chance();
    return chance.name();
  };

  return (
    <div className="main-container">
      <div className="heading">Redux Practice App</div>
      <div className="btns">
        <button className="add-btn" onClick={() => addUserFunc(name())}>
          Add User
        </button>
        <button className="delete-btn" onClick={deleteAllUsersFunc}>
          Delete All Users
        </button>
      </div>
      <div className="names">
        {names && names.length > 0 && names.map((name, index) => (
          <NameComponent key={index} name={name} pos={index} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
