import React from 'react';

React;

const navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        <ul className="font-semibold">
          <li className="items-center flex gap-4">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Changelog</a>
            <a href="">Blog</a>
            <a href="">Download</a>
            <a href="">Contact</a>
            <button className="btn btn-secondary bg-blue-400 border-none">
              Secondary
            </button>
          </li>
        </ul>
      </div>
      <div className="parent_div flex mt-[40px] justify-center items-center gap-[30px]">
        <div className="card w-97 h-[200px] card-md shadow-sm bg-gradient-to-t from-purple-700 to bg-purple-400">
          <div className="card-body">
            <h2 className="card-title justify-center text-cente">Resolved</h2>
            <h2 className="card-title justify-center text-center">0</h2>
          </div>
        </div>

        <div className="card w-97 h-[200px] card-md shadow-sm bg-gradient-to-r from bg-green-200 to fill-green-800">
          <div className="card-body">
            <h2 className="card-title font-bold text-center text-2xl">
              Resolved
            </h2>
            <h2 className="card-title font-bold text-center text-2xl justify-center">
              0
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
