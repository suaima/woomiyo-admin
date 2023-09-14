import React, { Component } from "react";
// import { ProgressBar } from 'react-bootstrap';
import ContactListTable from "./ContactListTable";
import { ContactListData } from "../services/Contacts";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class ContactList extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
    console.log(ContactListData, "ContactListData");
    this.data = ContactListData.filter((data, index) => {
      if (Number(this.props.match.params.contactBookId) === data.contactBookId)
        return data;
    });
    console.log(this.data, "this.data");
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Contact List </h3>
          <nav aria-label="breadcrumb">
            <Link className="btn btn-gradient-success" to="/contact-list-add">
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
                      {this.data.map((data, index) => (
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
                              <Link to={"/contact-list-view/" + data.id}>
                                View
                              </Link>
                              |{" "}
                              <Link to={"/contact-list-edit/" + data.id}>
                                Edit
                              </Link>{" "}
                              |
                              <Link to={"/contact-list-delete/" + data.id}>
                                Delete
                              </Link>
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
}

export default ContactList;
