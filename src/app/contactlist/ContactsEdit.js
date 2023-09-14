import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Form } from "react-bootstrap";

export class ContactsEdit extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Contact Add </h3>
          <nav aria-label="breadcrumb">
            <Link className="btn btn-gradient-danger" to="/contacts">
              Back
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">
                      Contant Book Name
                    </label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="** Like name to be Office Contact "
                      size="lg"
                      value="New Name"
                    />
                  </Form.Group>
                  <Link to="/contacts">
                    <button type="submit" className="btn btn-info mr-2">
                      Update
                    </button>
                  </Link>
                  <Link to="/contacts" className="btn btn-light">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsEdit;
