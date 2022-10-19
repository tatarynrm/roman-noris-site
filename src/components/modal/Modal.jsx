import React from "react";
import "./modal.css";
import { FcApproval } from "react-icons/fc";
const Modal = ({ modalActive, setModalActive, name, userLocation }) => {
  const hideModal = () => {
    setModalActive(!modalActive);
  };
  return (
    <div className="modal__window">
      <div className="modal__content">
        <div className="modal__top">
          <h3>Thanks</h3>
          <FcApproval className="modal-icon" />
          <br />
          <p>
            Thank you, <b className="modal__user-name">{name.toUpperCase()}</b>
            &#129321;
            <br />
            Your message delivered to the most <b>HANDSOME GUY</b> in the World!
          </p>
        </div>
        <button onClick={() => hideModal()} className="btn btn-primary">
          Close
        </button>
        {userLocation?.map((user) => (
          <div key={user.plusCode} className="modal__user-location">
            <div>
              Your Location : {user.countryName} - {user.locality}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
