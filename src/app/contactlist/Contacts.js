import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import dataObject from "../services/Contacts";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Contacts </h3>
          <nav aria-label="breadcrumb">
            <Link className="btn btn-gradient-success" to="/contact-add">
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
                      {dataObject.list.map((data) => (
                        <>
                          <tr key={data.id}>
                            <td className="py-1">{data.id}</td>
                            <td> {data.name} </td>
                            <td> {data.contactCount} </td>
                            <td>
                              <Link to="/">View</Link> |{" "}
                              <Link to="/">Edit</Link> |{" "}
                              <Link to="/">Delete</Link>
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
