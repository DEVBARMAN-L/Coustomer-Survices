import React, { use } from 'react';

const Survices = ({ ticketsPlan }) => {
  const tickets = use(ticketsPlan);
  console.log(tickets);
  return (
    <>
      <div>
        <div className="parent-div grid grid-cols-2">
          {tickets.map(tickets => (
            <div className="parent-div">
              <div key={tickets.id} className="child-1">
                <div className="card w-[400px] bg-white card-xs shadow-sm max-w-sm gap-x-0">
                  <div className="card-body">
                    <h2 className="card-title text-black">{tickets.title}</h2>
                    <p className="text-black">{tickets.description}</p>
                    <div className="parent flex justify-between">
                      <div className="flex gap-1">
                        <p className="text-black">{tickets.number}</p>
                        <p className="text-red-500">{tickets.priority}</p>
                      </div>
                      <div className="flex">
                        <p className="text-gray-500">{tickets.createdAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>

      <footer>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </footer>
    </>
  );
};

export default Survices;

{
  Survices;
}
