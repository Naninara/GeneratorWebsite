import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Fuelusage = () => {
  var [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/getFuelData").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const [send, setSend] = useState({
    date: "",
    fuel: "",
  });
  const handleChange = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
    console.log(send);
  };

  const postSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/fuelData", { send })
      .then((res) => {
        setSend(res.data);
        alert("Data entered Sucessfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sales-boxes">
      <div className="recent-sales box">
        <div className="title">Fuel Usage</div>
        <br />
        <div className="sales-details">
          <form className="fuelForm" onSubmit={postSubmit}>
            <label>Date: </label>
            <input type="date" name="date" onChange={handleChange} />
            <label> fuel Used: </label>
            <input type="text" name="fuel" onChange={handleChange}></input>
            <button type="submit" className="submitButton">
              submit
            </button>
          </form>
        </div>
        <table className="table">
          <tr className="tableHeader">
            <td>S.No</td>
            <td>Date</td>
            <td>Fuel Usage</td>
          </tr>

          {data.map((ele, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{ele.date.substr(0, 10)}</td>
                <td>{ele.fuel} litres</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Fuelusage;
