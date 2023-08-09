import React from 'react'

const SystemLog = () => {
  return (
    <div>
      <div className="row">
  <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">General Infomation</h4>
      </div>{/*end card-header*/}
      <div className="card-body">
        <table className="table table-bordered  table-hover">
          <tbody><tr>
              <td>  Uptime</td>
              <td className="summaryValue"><span className="text-muted">72  Days 44  minutes </span> </td>
            </tr>
            <tr>
              <td>System Load</td>
              <td><span className="text-muted">0.03 0.03 0.05<br />Tasks: 216 total,   1 running, 215 sleeping,   0 stopped,   0 zombie<br />%Cpu(s):  0.0 us,  0.8 sy,  0.0 ni, 99.2 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 ste</span> </td>
            </tr>
            <tr>
              <td> Host Name </td>
              <td><span className="text-muted">10.197.52.144:8443</span> </td>
            </tr>
            <tr>
              <td> Version </td>
              <td><span className="text-muted">1.0</span> </td>
            </tr>
            <tr>
              <td> System Date </td>
              <td><span className="text-muted">Tuesday june 15, 2022</span> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Service Status</h4>
      </div>{/*end card-header*/}
      <div className="card-body">
        <table className="table table-bordered  table-hover">
          <tbody>
            <tr>
              <td>Mysql</td>
              <td><a style={{color: '#22b783'}}>Running</a></td>
              <td>29281</td>
              <td className="summaryValue">
                <button id="start_btn" className="text-white btn btn-primary" disabled style={{padding: '2px 10px'}}> start</button>                                                 
              </td>
              <td className="summaryValue">
                <button id="restart_btn" onclick="restartmysql()" className="text-white btn btn-success" style={{padding: '2px 10px'}}>Re-start</button>
              </td>
            </tr>
            <tr>
              <td>Ntp</td>
              <td><a style={{color: '#22b783'}}>Running</a></td>                                                 
              <td>123555</td>                                                 
              <td className="summaryValue">
                <button id="start_btn" onclick="changeLocks()" className="text-white btn btn-primary" style={{padding: '2px 10px'}}> start</button>                                                 
              </td>                                              
              <td className="summaryValue">
                <button id="restart_btn" onclick="restartmysql()" className="text-white btn btn-success" style={{padding: '2px 10px'}}>Re-start</button>
              </td>
            </tr>
            <tr>
              <td> Httpd </td>
              <td><a style={{color: '#22b783'}}>Running</a></td>                                                 
              <td>123555</td>                                                 
              <td className="summaryValue">
                <button id="start_btn" onclick="changeLocks()" className="text-white btn btn-primary" style={{padding: '2px 10px'}}> start</button>                                                 
              </td>                                               
              <td className="summaryValue">
                <button id="restart_btn" onclick="changeLocks()" className="text-white btn btn-success" style={{padding: '2px 10px'}}>Re-start</button>
              </td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td><span className="text-muted" />&nbsp; </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><span className="text-muted" />&nbsp; </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><span className="text-muted" />&nbsp; </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div> 
</div>

    </div>
  )
}

export default SystemLog
