import React from "react";
// import { useNavigate } from 'react-router-dom';
function ContactListAdd() {
    // const navigate = useNavigate();
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Contacts </h3>
          <nav aria-label="breadcrumb">
            <button
              type="button"
              className="btn btn-gradient-danger btn-rounded btn-icon"
              title="Back"
            //   onClick={() => navigate(-1)}
            >
              <i class="mdi mdi-undo-variant"></i>
            </button>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                ContactListAdd
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactListAdd;
