import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Card from './Card';


const Input = () => {

   const { state } = useContext(GlobalContext);
   const { datos, userCheck } = state;
   const navigate = useNavigate();

   const [first, setFirst] = useState();

  const handleChange = (event: any) => {
    setFirst(event.target.value || "");
  };

    const onSearch = (event: any) => {
         event.preventDefault();

      //
  let Searching: any = "";
  if (
    event &&
    event.target &&
    event.target.searching &&
    event.target.searching.value
  ) {
    Searching = event.target.searching.value;
  }
  if(!Searching){
    return;
  }
  // 
  let checkUserName = {
        email: "",
        id: "",
      };

      datos.forEach((object: any) => {
        if (object.email === Searching || object.id.toString() === Searching) {
          checkUserName = object;
        }
      });

      if (
        (checkUserName.email === Searching ||
          checkUserName.id.toString() === Searching) &&
        Searching !== ""
      ) {
       if(userCheck){
          setFirst("" || undefined);
  return  navigate(`/private/list/${checkUserName.id}`);

       }
       
        navigate(`/list/${checkUserName.id}`);
      } else {
        alert("Sorry, we don't have this email in the database");
      }
      setFirst("" || undefined);
    };

  return (
    <>
      <div>
        <form onSubmit={onSearch}>
          <div>
            <div className="divLabel">
              <label>Look for a user(active accounts)</label>
            </div>
            <input
              onChange={handleChange}
              value={first || ""}
              type={"text"}
              name="searching"
              placeholder={"email or code.."}
            />
            <button onClick={() => onSearch(first)} className="btnNav">
              Search
            </button>
            <div className="divCard">
              <Card first={first} setFirst={setFirst} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Input