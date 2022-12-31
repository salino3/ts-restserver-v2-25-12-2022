import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

interface Props {
  first: any;
  setFirst: React.Dispatch<React.SetStateAction<any>>;
};

const Card = ({first, setFirst}: Props) => {


   const { state } = useContext(GlobalContext);
   const { datos } = state;
    let character: string = ")";


     const onSearchCard = (event: any) => {
      setFirst(event);
     };

  return (
    <>
      {!datos
        ? "Loading"
        : datos
            .filter((item: any) => {
              let searchTerm = "";
              let x = first;
              searchTerm = x?.toLowerCase() || "";
              const theemail: any = item.email.toLowerCase() || "";
              const theid = item.id.toString();

              return (
                searchTerm &&
                (theid.includes(searchTerm) || theemail.includes(searchTerm)) &&
                (theemail || theid)
              );
            })
            .slice(0, 10)
            .filter((y: any) => y["state"] === true)
            .map((item: any, index: any) => (
              <div
                onClick={() => onSearchCard(item.email)}
                className="divRows"
                key={index}
              >
                {item.id} {character} &nbsp; {item.email}
              </div>
            ))}
    </>
  );
}

export default Card