import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../../Services/categoryServices";

function Category() {
  const [apiData, setAPIData] = useState([]);
  useEffect(() => {
    CategoryService.getAll()
      .then((res) => {
        console.log(res.data);
        setAPIData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items["name"]}</td>
                  <td>{items["status"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Category;
