import React from 'react'

const ViewReport = () => {
  return (
    <div>
      <div className="row">                        
  <div className="col-md-12">
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">View report</h4>
      </div>
      <div className="card-body">
        <div className="col-md-12 m-auto">                                        
          <div className="row">
            <input type="hidden" name="viewreporttoken" id="viewreporttoken" defaultValue="63d8aaccd0325" />
            <div className="col-md-5 text-center">
              <label className="mb-2"><b>Select User</b></label>
              <select className="form-control" name="user" id="user" required>
                <option value className="text-center"> -------- Select User -------- </option>
                <option value="K01UckdnLzNrU01aTFltSzZqVk1FUT09"> test1@gmail.com </option>
                <option value="SFJEclB2YmRnSEF2OHVvZXd3RHdtQT09"> test2@gmail.com </option>
                <option value="L013bDhkd3h1c2dWbFFvYjI0N1poUT09"> test3@gmail.com </option>
                <option value="TTU1NmxTdFQvVTI1ekt1cktNSEpEdz09"> test4@gmail.com </option>
                <option value="cU1DN3VYYkRpamlmeDFEM3NpejNDdz09"> test5@gmail.com </option>
                <option value="ZWtPMmZDc0k0MTJCNXZpWG8vcFBGZz09"> test6@gmail.com </option>
                <option value="Slorbnd2azFlZElEZE1DeGpVZks5UT09"> test7@gmail.com </option>
                <option value="TWY2T2xHbjF1UWk1UU8rTy9VdkdGQT09"> test8@gmail.com </option>
              </select>                                            
            </div> 
            <div className="col-md-5 text-center">
              <label className="mb-2"><b>Select Date</b></label>
              <div className="input-group" id="DateRange">
                <input type="text" className="form-control" id="date" placeholder="Select Date Range" name="start" autoComplete="off" />
              </div>                                         
            </div>
            <div className="col-md-2">
              <label className />
              <div>
                <input type="submit" className=" w-btn w-btn-blue mt-2" name="submit" id="view_submit" defaultValue="submit" />
                <input type="submit" className="w-btn w-btn-warning mt-2" name="submit" id="reset" defaultValue="Reset" />
              </div>
            </div>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered" id="datatable_2">
                <thead>
                  <tr>
                    <th>s.no.</th>
                    <th>Date</th>
                    <th>Ticket no.</th>
                    <th>Email</th>
                    <th>Domain</th>                                                    
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
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

export default ViewReport
