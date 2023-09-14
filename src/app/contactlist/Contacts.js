import React, { useState } from "react";
import { ContactsData } from "../services/Contacts";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import DeleteConfirmation from "../basic-ui/DeleteConfirmation";
import { Alert } from "react-bootstrap";

function Contacts() {
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [fruitMessage, setFruitMessage] = useState(null);
  const [vegetableMessage, setVegetableMessage] = useState(null);

  // deleteSubmit
  const deleteSubmit = () => {
    setDeleteMessage("Item is delete successfully");
    setDisplayConfirmationModal(false);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDeleteMessage(null);
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={deleteSubmit}
        hideModal={hideConfirmationModal}
        // type={type}
        // id={id}
        message="Are you sure delete to this item."
      />

      <div className="page-header">
        <h3 className="page-title"> Contacts </h3>
        <nav aria-label="breadcrumb">
          <Link className="btn btn-gradient-success" to="/contact/add">
            New
          </Link>
        </nav>
      </div>
      <div className="row">
        {deleteMessage && (
          <div className="col-lg-12">
            <Alert variant="success">{deleteMessage}</Alert>
          </div>
        )}
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th> Id </th>
                      <th> Name </th>
                      <th> Contact count </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ContactsData.map((data, index) => (
                      <>
                        <tr key={index}>
                          <td className="py-1">{data.contactBookId}</td>
                          <td> {data.name} </td>
                          <td> {data.contactCount} </td>
                          <td>
                            <Link to={"/contacts/" + data.contactBookId}>
                              <button
                                type="button"
                                className="btn btn-gradient-success btn-rounded btn-icon"
                              >
                                <i class="mdi mdi-contacts"></i>
                              </button>
                            </Link>
                            <Link
                              to={"/contacts/" + data.contactBookId + "/edit"}
                            >
                              <button
                                type="button"
                                className="btn btn-gradient-info btn-rounded btn-icon"
                              >
                                <i class="mdi mdi-pencil"></i>
                              </button>
                            </Link>
                            <button
                              type="button"
                              className="btn btn-gradient-danger btn-rounded btn-icon"
                              onClick={() => setDisplayConfirmationModal(true)}
                            >
                              <i class="mdi mdi-delete"></i>
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
