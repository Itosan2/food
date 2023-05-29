import React, { useEffect } from "react";

const ModalPage = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div>
      <p>{modalContent}</p>
    </div>
  );
};

export default ModalPage;
