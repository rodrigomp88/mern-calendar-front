import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar mb-4">
      <span className="navbar-brand">Rodrigo</span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
