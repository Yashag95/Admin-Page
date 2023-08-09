import React from 'react'

const SysConfig = () => {
  return (
    <div>
      <div className="row">
  <div className="col-md-12">
    <div className="card">
      <div className="card-header">
        <div className="widget-heading mb-sm justify-setting group-btn-list">
          <a className="btn btn-primary active" style={{backgroundColor: '#1c4978'}} href="system_configuration.php" aria-label="tag" rel="noopener noreferrer">NTP Setting</a>
          <a className="btn btn-primary " style={{backgroundColor: '#3f77b2'}} href="mysql_setting.php" aria-label="tag" rel="noopener noreferrer">MYSQL Setting</a>
          <a className="btn btn-primary " style={{backgroundColor: '#3f77b2'}} href="general_setting.php" aria-label="tag" rel="noopener noreferrer">General Setting</a>
          <a className="btn btn-primary " style={{backgroundColor: '#3f77b2'}} href="password_setting.php" aria-label="tag" rel="noopener noreferrer">Password Setting</a>	
        </div>
      </div>
      <div className="card-body">
        <form method="post" id="ajaxntpsettingadd">
          <div className="mb-3 row">
            <input type="hidden" name="ntphiddentoken" id="ntphiddentoken" defaultValue="63f5b3d66bb78" />
            <input type="hidden" name="type" defaultValue="ntp_setting_type" />
            <input type="hidden" name="id" defaultValue={1} />
            <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Server 1 <span className="text-danger">*</span></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="ntp_server_1" name="ntp_server_1" placeholder="Enter IP or Host Name" />
            </div>
            <span id="ntponeerror" className="text-center text-danger" />
          </div>
          <div className="mb-3 row">
            <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Server 2 <span className="text-danger">&nbsp;*</span></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="ntp_server_2" name="ntp_server_2" placeholder="Enter here" />
            </div>
            <span id="ntptwoerror" className="text-center text-danger" />
          </div>
          <div className="mb-3 row">
            <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Server 3 <span className="text-danger">&nbsp;*</span></label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="ntp_server_3" name="ntp_server_3" placeholder="Enter IP or Host Name" />
            </div>
            <span id="ntpthreeerror" className="text-center text-danger" />
            <div className="mt-5">
              <button type="button" name="submit" id="ntpaddform" className="w-btn w-btn-blue">Apply</button>
            </div>
          </div>
        </form> 
      </div>
    </div>
  </div> 
</div>

    </div>
  )
}

export default SysConfig
