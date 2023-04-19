const Maintenance = () => {
  return (
    <div className="sales-boxes">
      <div className="recent-sales box">
        <div className="title">Maintenance Report</div>
        <div className="sales-details">
          <table className="table">
            <tr className="tableHeader">
              <td>S.No</td>
              <td>Branch</td>
              <td>Address</td>
              <td>Capacity</td>
              <td>Used Litres</td>
              <td>Service Litres</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Surampalem</td>
              <td>Adb Road</td>
              <td>560W</td>
              <td>250 litres</td>
              <td>500 litres</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kakinada</td>
              <td>Main road</td>
              <td>750w</td>
              <td>450 litres</td>
              <td>700 litres</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
