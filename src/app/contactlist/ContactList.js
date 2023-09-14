import React, { useState } from "react";
import { ContactListData } from "../services/Contacts";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DeleteConfirmation from "../basic-ui/DeleteConfirmation";
import { Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';

function ContactList() {

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  //use useParams 

  const params = useParams()

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
        <h3 className="page-title"> Contact List </h3>
        <nav aria-label="breadcrumb">
          <Link className="btn btn-gradient-success" to={"/contacts/" + params.contactBookId + "/list/add"}>
            New
          </Link>
          <Link to="/contacts">
            <button
              type="button"
              className="btn btn-gradient-danger btn-rounded btn-icon"
              title="Back"
            >
              <i class="mdi mdi-undo-variant"></i>
            </button>
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
                      <th> Contact Number </th>
                      <th> Address </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ContactListData.map((data, index) => (
                      <>
                        <tr key={index}>
                          <td className="py-1">{index + 1}</td>
                          <td>{data.firstName + data.lastName}</td>
                          <td>{data.phone}</td>
                          <td>
                            {data.address.address +
                              ", " +
                              data.address.city +
                              ", " +
                              data.address.state +
                              " (" +
                              data.address.postalCode +
                              ")"}
                          </td>
                          <td>
                            <Link to={"/contacts/" + params.contactBookId + "/list/" + data.id + "/view"}>
                              <button
                                type="button"
                                className="btn btn-gradient-success btn-rounded btn-icon"
                                title="Contact Info"
                              >
                                <i class="mdi mdi-eye"></i>
                              </button>
                            </Link>
                            <Link to={"/contacts/" + params.contactBookId + "/list/" + data.id + "/edit"}>
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

export default ContactList;
