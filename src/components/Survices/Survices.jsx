import React, { use } from 'react';

const Survices = ({ ticketsPlan }) => {
  const tickets = use(ticketsPlan);
  console.log(tickets);
  return (
    <>
      <div>
        <div className="flex mt-3">
          <div className="parent-div max-w-[1200px] mx-auto grid grid-cols-2 gap-5">
            {tickets.map(tickets => (
              <div className="parent-div">
                <div key={tickets.id} className="child-1">
                  <div className="card w-[400px] bg-white card-xs shadow-sm max-w-sm">
                    <div className="card-body">
                      <h2 className="card-title text-black">{tickets.title}</h2>
                      <p className="text-black">{tickets.description}</p>
                      <div className="parent flex justify-between">
                        <div className="flex gap-1">
                          <p className="text-black">{tickets.number}</p>
                          <p className="text-red-500 text-[15px]">
                            {tickets.priority}
                          </p>
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
          <div className="right-div md:w-[300px] border-2 border-red-400"></div>
        </div>
      </div>
      <footer>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <nav>
            <h6 className="footer-title">CS — Ticket System</h6>
            <p>
              Lorem Ipsum is simply dummy text of the
              <br />
              printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's
              <br />
              standard dummy text
              <br />
              ever since the 1500s, when an unknown printer took a galley of
              <br />
              type and scrambled it to
              <br />
              make a type specimen book.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Saled</a>
          </nav>

          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
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
