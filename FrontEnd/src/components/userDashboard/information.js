const Table = () => {
  return (
    <div className="sales-boxes">
      <div className="recent-sales box">
        <div className="title">Generator information</div>
        <div className="sales-details">
          <table className="table">
            <tr className="tableHeader">
              <td>S.No</td>
              <td>Branch</td>
              <td>Address</td>
              <td>Capacity</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Surampalem</td>
              <td>Adb Road</td>
              <td>560W</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
