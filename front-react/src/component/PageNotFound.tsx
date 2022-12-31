import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {

 const navigate = useNavigate();

  return (
    <>
      <div className="divPNF">
        <li onClick={() => navigate(-1)}>
          <u>Go Back</u>
        </li>
        <img src="/assets/pagenotfound.jfif" alt="Page Not Found" />
      </div>
    </>
  );
}
