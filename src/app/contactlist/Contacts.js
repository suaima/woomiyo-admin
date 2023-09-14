import React, { Component } from "react";
import {ContactsData} from "../services/Contacts";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Contacts </h3>
          <nav aria-label="breadcrumb">
            <Link className="btn btn-gradient-success" to="/contact/add">
              New
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
                        <th> Contact count </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ContactsData.map((data) => (
                        <>
                          <tr key={data.contactBookId}>
                            <td className="py-1">{data.contactBookId}</td>
                            <td> {data.name} </td>
                            <td> {data.contactCount} </td>
                            <td>
                              <Link to={"/contacts/"+data.contactBookId}>View contacts</Link> |{" "}
                              <Link to={"/contacts/"+data.contactBookId+"/edit"}>Edit</Link> |{" "}
                              <Link to={"/contacts/"+data.contactBookId+"/delete"}>Delete</Link>
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

export default Contacts;
