import React, { Component } from 'react'
// import { ProgressBar } from 'react-bootstrap';
import ContactListTable from './ContactListTable';

export class ContactList extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Contact List </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>/</a></li>
                            <li className="breadcrumb-item active" aria-current="page"></li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <ContactListTable />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ContactList
