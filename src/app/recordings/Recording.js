import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class Recording extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Recording Manager </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>{" "}</a></li>
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
                        <th> Call ID </th>
                        <th> Call Direction </th>
                        <th> Start Date</th>
                        <th> End Date</th>
                        <th> Trunk</th>
                        <th> Campaign</th>
                        <th> Queue</th>
                        <th> IVR</th>
                        <th> Agent</th>
                        <th> Extension </th>
                        <th>Caller Number</th>
                        <th>Called Number</th>
                        <th>Call Duration</th>
                        <th>Hangup Cause</th>
                        <th>Disposition</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                         
                        </td>
                        <td> </td>
                        <td>
                          <ProgressBar variant="success" now={25} />
                        </td>
                        <td> </td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          
                        </td>
                        <td>  </td>
                        <td>
                          
                        </td>
                        <td>  </td>
                        <td> </td>
                        <td>  </td>
                        <td>
                        </td>
                        <td>  </td>
                        <td> </td>
                        <td>  </td>
                        <td>
                        </td>
                        <td>  </td>
                        <td> </td>
                        <td>  </td>
                        <td>    
                        </td>
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

export default Recording
