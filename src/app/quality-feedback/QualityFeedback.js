import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class QualityFeedback extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Quality </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}></a></li>
              <li className="breadcrumb-item active" aria-current="page"></li>
            </ol>
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
                        <th> Status </th>
                        <th> Rating </th>
                        <th> Feedback </th>
                        <th> Recording </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                         
                        </td>
                        <td>  </td>
                        <td>
                          
                        </td>
                        <td> </td>
                        <td>  </td>
                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default QualityFeedback
