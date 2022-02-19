import React, { useState } from "react";
import CustomModal from "../../../utility/customComponent/CustomModal";

const ProjectAddForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleToogleModalClose = () => {
    setOpenModal(!openModal);
  };
  const handleModalSubmit = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <CustomModal
        openModal={openModal}
        handleToogleModalClose={handleToogleModalClose}
        handleModalSubmit={handleModalSubmit}
        title="hi"
      >
        <h2>Hello World</h2>
      </CustomModal>
    </div>
  );
};

export default ProjectAddForm;
