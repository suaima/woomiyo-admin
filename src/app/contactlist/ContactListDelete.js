import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class ContactListDelete extends Component {

    constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Contacts </h3>
          <nav aria-label="breadcrumb">
            <Link className="btn btn-gradient-success" to="/contact-list-add">
              New
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                ContactListDelete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactListDelete;
