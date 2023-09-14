import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Form } from 'react-bootstrap';
function ContactListAdd() {
  const params = useParams();
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Contacts </h3>
        <nav aria-label="breadcrumb">
          <Link to={"/contacts/" + params.contactBookId + "/list"}>
            <button
              type="button"
              className="btn btn-gradient-danger btn-rounded btn-icon"
              title="Back"
            >
              <i className="mdi mdi-undo-variant"></i>
            </button>
          </Link>
        </nav>
      </div>
      <div className="row">
        {/* <div className="col-lg-12 grid-margin stretch-card"> */}
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample">
                <p className="card-description"> Personal info </p>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">First Name</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Last Name</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Gender</label>
                      <div className="col-sm-9">
                        <select className="form-control">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Date of Birth</label>
                      <div className="col-sm-9">
                        <DatePicker className="form-control w-100"
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>

                 */}


                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Category</label>
                      <div className="col-sm-9">
                        <select className="form-control">
                          <option>Category1</option>
                          <option>Category2</option>
                          <option>Category3</option>
                          <option>Category4</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Membership</label>
                      <div className="col-sm-4">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Free
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> Proffessional
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <p className="card-description"> Address </p>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Address 1</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">State 1</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Address 2</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Postcode</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Cirt</label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Country</label>
                      <div className="col-sm-9">
                        <select className="form-control">
                          <option>America</option>
                          <option>Italy</option>
                          <option>Russia</option>
                          <option>Britain</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <Link to={"/contacts/" + params.contactBookId + "/list"}>
                    <button type="submit" className="btn btn-info mr-2">
                      Add
                    </button>
                  </Link>
                  <Link to={"/contacts/" + params.contactBookId + "/list"} className="btn btn-light">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactListAdd;
