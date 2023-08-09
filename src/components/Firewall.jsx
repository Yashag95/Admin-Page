import React from 'react'

const Firewall = () => {
  return (
    <div>
      <div className="row">
  <div className="col-md-12">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Firewall</h4>
      </div>
      <div className="card-body">
        <div className="col-md-12">
          <div className="float-left mb-3">
            <button type="button" className="w-btn w-btn-success mr-2 float-left" data-bs-toggle="modal" data-bs-target="#add_ip_rule">
              Add New Rule
            </button>
            <button type="button" className="w-btn w-btn-warning btn-sm float-left" onclick="apply_firewall();">
              <i className="fa fa-clock-o" aria-hidden="true" style={{paddingRight: 5, fontSize: 14}} />  Apply Rules
            </button>
          </div>
        </div>
        <div id="firewallData"><div className="table-responsive">
            <div id="firewall_datatable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="firewall_datatable_length"><label>Show <select name="firewall_datatable_length" aria-controls="firewall_datatable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="firewall_datatable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="firewall_datatable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="firewall_datatable" className="table dataTable no-footer" aria-describedby="firewall_datatable_info">
                    <thead>
                      <tr><th className="sorting sorting_asc" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Id: activate to sort column descending" style={{width: '12.6754px'}}>Id</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Chain : activate to sort column ascending" style={{width: '37.7851px'}}>Chain </th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Rule Family : activate to sort column ascending" style={{width: '42.6316px'}}>Rule Family </th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Source IP: activate to sort column ascending" style={{width: '45.5592px'}}>Source IP</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Destination IP: activate to sort column ascending" style={{width: '76.1842px'}}>Destination IP</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Protocol: activate to sort column ascending" style={{width: '55.4167px'}}>Protocol</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Destination Port: activate to sort column ascending" style={{width: '76.1842px'}}>Destination Port</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Description: activate to sort column ascending" style={{width: '75.8224px'}}>Description</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending" style={{width: '44.7478px'}}>Action</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{width: '41.2829px'}}>Status</th><th className="sorting" tabIndex={0} aria-controls="firewall_datatable" rowSpan={1} colSpan={1} aria-label=": activate to sort column ascending" style={{width: '21.8531px'}} /></tr>
                    </thead>
                    <tbody>
                      <tr id={6658} className="odd">
                        <td className="sorting_1">1</td>
                        <td>INPUT</td>
                        <td>ipv4</td>
                        <td>ANY</td>
                        <td className="center">-</td>
                        <td className="center">TCP</td>
                        <td className="center">22</td>
                        <td>dsds</td>
                        <td className="center">ACCEPT</td>
                        <td className="center"><b style={{color: 'green'}}>Enable</b></td>
                        <td>
                          <div className="bs-example">
                            <span>
                              <a href="javascript:void(0)" data-id="Q0xjQlA1N0I4QVc2eU1neXh3YTUrUT09" className="delete_firewall"> <i className="fas fa-trash-alt btn btn-danger btn-sm" /></a>
                            </span>
                          </div>
                        </td>
                      </tr><tr id={6656} className="even">
                        <td className="sorting_1">2</td>
                        <td>INPUT</td>
                        <td>ipv4</td>
                        <td>ANY</td>
                        <td className="center">-</td>
                        <td className="center">TCP</td>
                        <td className="center">995</td>
                        <td>test</td>
                        <td className="center">ACCEPT</td>
                        <td className="center"><b style={{color: 'green'}}>Enable</b></td>
                        <td>
                          <div className="bs-example">
                            <span>
                              <a href="javascript:void(0)" data-id="d2ZRTWxCUkoydHByelk2c203NkJ1dz09" className="delete_firewall"> <i className="fas fa-trash-alt btn btn-danger btn-sm" /></a>
                            </span>
                          </div>
                        </td>
                      </tr><tr id={6655} className="odd">
                        <td className="sorting_1">3</td>
                        <td>INPUT</td>
                        <td>ipv4</td>
                        <td>ANY</td>
                        <td className="center">-</td>
                        <td className="center">ICMP</td>
                        <td className="center">-</td>
                        <td>tedt</td>
                        <td className="center">ACCEPT</td>
                        <td className="center"><b style={{color: 'green'}}>Enable</b></td>
                        <td>
                          <div className="bs-example">
                            <span>
                              <a href="javascript:void(0)" data-id="TG4xM2pOSDlubWtNTERSSVpJcHkvdz09" className="delete_firewall"> <i className="fas fa-trash-alt btn btn-danger btn-sm" /></a>
                            </span>
                          </div>
                        </td>
                      </tr></tbody>
                  </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="firewall_datatable_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="firewall_datatable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="firewall_datatable_previous"><a href="#" aria-controls="firewall_datatable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="firewall_datatable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="firewall_datatable_next"><a href="#" aria-controls="firewall_datatable" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div></div></div>
        <div className="modal fade" id="add_ip_rule">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Add New Rules</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" style={{backgroundColor: 'red'}} />
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form method="post" role="form" id="firewall_rules" className="form-horizontal group-form">
                  <input type="hidden" name="type" defaultValue="add_firewall_rules" />
                  <input type="hidden" name="firewalltoken" id="firewalltoken" defaultValue="63f5b3d66bb78" />
                  <div className="row mb-3">
                    <label htmlFor="chain" className="col-md-4">Chain  <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control" name="direction" id="direction" required>
                        <option value>     ---------    Select    -----------  </option>
                        <option value="INPUT"> INPUT </option>
                      </select>
                      <span id="chainErrorMsg" />
                    </div>                                    
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Rule Family <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control" name="rule_family" id="rule_family" required>
                        <option value>     ---------    Select    -----------  </option>
                        <option value="ipv4"> IPv4 </option>
                      </select>
                      <span id="rulefamilyErrorMsg" />
                    </div>                                    
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Protocol </label>
                    <div className="col-md-8">
                      <select className="form-control" name="protocol" id="protocol" required>
                        <option value>     ---------    Select    -----------  </option>
                        <option value="TCP">TCP</option>
                        <option value="UDP">UDP</option>
                        <option value="ICMP">ICMP</option>
                      </select>
                      <span id="protocolErrorMsg" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Source IP <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control" name="source_ip" id="source_ip" required>
                        <option value>     ---------    Select    -----------  </option>
                        <option value="ANY">Any</option>
                        <option value="Other">Other</option>
                      </select>
                      <span id="sourceipErrorMsg" />
                    </div>
                  </div>
                  <div className="display_hide" id="ip_source" style={{display: 'none'}}>
                    <div className="row mb-3">   
                      <label className="col-md-4"> </label>
                      <div className="col-md-8 d-flex">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" name="source_ip_name" id="source_ip_name" className="form-control has-feedback" placeholder="Enter source IP" required />
                      </div>
                    </div>
                    <div className="row mb-3">    
                      <label className="col-md-4"> </label>
                      <div className="col-md-8 d-flex">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" name="source_ip_mask" id="source_ip_mask" className="form-control has-feedback" placeholder="Enter source Mask" required />
                      </div>
                      <label className="col-md-4"> </label>
                      <div className="col-md-8">
                        <p className="cond_after"><b>Note</b>: Enter only mask value like 24/32 </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Source Port :<span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control add-disable" name="source_port" id="source_port" required>
                        <option value>     ---------    Select    -----------  </option>
                        <option value="ANY">ANY</option>
                        <option value={21}>FTP-21</option>
                        <option value={22}>SSH-22</option>
                        <option value={25}>SMTP-25</option>
                        <option value={69}>TFTP-69</option>
                        <option value={80}>HTTP-80</option>
                        <option value={110}>POP-110</option>
                        <option value={143}>IMAP-143</option>
                        <option value={389}>LDAP-389</option>
                        <option value={443}>HTTPS-443</option>
                        <option value={465}>SMTP(SSL)-465</option>
                        <option value={587}>SMTP(TLS)-587</option>
                        <option value={3306}>MYSQL-3306</option>
                        <option value={993}>IMAP(SSL)-993</option>
                        <option value={995}>POP(SSL)-995</option>
                        <option value={1812}>RADIUS-1812</option>
                        <option value={1813}>RADIUS-ACCT-1813</option>
                        <option value={2049}>NFS-2049</option>
                        <option value={5432}>POSTGRES-5432</option>
                        <option value={8080}>HTTP(WEBCACHE)-8080</option>
                        <option value={8443}>PCSYNC-HTTPS-8443</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div id="port_source" className=" display_hide" style={{display: 'none'}}>
                    <div className="row mb-3"> 
                      <label className="col-md-4"> </label>
                      <div className="col-md-8 d-flex">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" className="form-control has-feedback mb-3 add-disable" name="source_port_name" id="source_port_name" placeholder="Enter source port" required />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Destination IP : <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control add-disable" name="desti_ip" id="desti_ip" required>
                        <option value>     ---------    Select    -----------  </option>
                        <option value="ANY">ANY</option>
                        <option value="Other">Other</option>
                      </select>
                    </div> 
                  </div>
                  <div id="ip_desti" className="display_hide" style={{display: 'none'}}>
                    <div className="row mb-3">    
                      <label className="col-md-4"> </label>
                      <div className="col-md-8 d-flex">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" name="desti_ip_name" id="desti_ip_name" className="form-control has-feedback add-disable" placeholder="Enter destination IP" required />
                      </div>
                    </div>
                    <div className="row mb-3">     
                      <label className="col-md-4"> </label>
                      <div className="col-md-8 d-flex">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" name="desti_ip_mask" id="desti_ip_mask" className="form-control has-feedback add-disable" placeholder="Enter destination Mask" required />
                      </div>
                      <label className="col-md-4"> </label>
                      <div className="col-md-8">
                        <p className="cond_after"><b>Note</b>:Enter only mask value like 24/32 </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Destination Port :  <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control" name="desti_port" id="desti_port">
                        <option value>     ---------    Select    -----------  </option>
                        <option value={21}>FTP-21</option>
                        <option value={22}>SSH-22</option>
                        <option value={25}>SMTP-25</option>
                        <option value={69}>TFTP-69</option>
                        <option value={80}>HTTP-80</option>
                        <option value={110}>POP-110</option>
                        <option value={143}>IMAP-143</option>
                        <option value={389}>LDAP-389</option>
                        <option value={443}>HTTPS-443</option>
                        <option value={465}>SMTP(SSL)-465</option>
                        <option value={587}>SMTP(TLS)-587</option>
                        <option value={993}>IMAP(SSL)-993</option>
                        <option value={3306}>MYSQL-3306</option>
                        <option value={995}>POP(SSL)-995</option>
                        <option value={1812}>RADIUS-1812</option>
                        <option value={1813}>RADIUS-ACCT-1813</option>
                        <option value={2049}>NFS-2049</option>
                        <option value={5432}>POSTGRES-5432</option>
                        <option value={8080}>HTTP(WEBCACHE)-8080</option>
                        <option value={8443}>PCSYNC-HTTPS-8443</option>
                        <option value="Other">Other</option>
                        <option value="Range">Port Range</option>
                      </select>
                    </div> 
                  </div>
                  <div className="display_hide" id="port_desti" style={{display: 'none'}}>
                    <div className="row mb-3"> 
                      <label className="col-md-4" />
                      <div className="col-md-8 d-flex">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" name="desti_port_name" id="desti_port_name" className="form-control has-feedback" placeholder="Enter Destination port" required />                                            
                      </div>
                      <label className="col-md-4"> </label>
                      <div className="col-md-8">
                        <p className="cond_after">Enter Destination Port between 1 to 65535 </p>
                      </div>
                    </div>
                  </div>     
                  <div className="display_hide" id="port_desti_range" style={{display: 'none'}}>
                    <div className="row mb-3"> 
                      <label className="col-md-4"> </label>
                      <div className="col-md-8">
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        <input type="text" name="desti_port_namerange" id="desti_port_namerange" className="form-control has-feedback" placeholder="Enter Destination port range" required />
                      </div>
                      <label className="col-md-4"> </label>
                      <div className="col-md-8">
                        <p className="cond_after">Enter Port range like 0:65535 </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Action : <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <select className="form-control" name="action" id="action">      
                        <option value="ACCEPT" selected> ACCEPT </option>
                      </select>
                    </div>                                    
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4">Description : <span style={{color: 'red'}}>*</span></label>
                    <div className="col-md-8">
                      <input type="text" required="required" name="description" id="description" className="form-control" />
                    </div>
                  </div>
                  <br />
                  <div className="modal-footer">
                    <button type="button" name="Cancel" value="Cancel" data-bs-dismiss="modal" className="w-btn w-btn-danger">Cancel </button>                                                                     &nbsp;
                    <input autoComplete="off" className="w-btn w-btn-blue" defaultValue="Submit" name="submit" id="add_new_firrule" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>                                       
      </div>
    </div>
  </div> 
</div>

    </div>
  )
}

export default Firewall
