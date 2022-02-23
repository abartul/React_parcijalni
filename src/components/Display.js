import React from "react";

function Display({ data, repositories }) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ marginLeft: "10px" }}>Avatar</th>
          <th style={{ marginLeft: "10px" }}>Name</th>
          <th style={{ marginLeft: "10px" }}>Location</th>
          <th style={{ marginLeft: "10px" }}>Bio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              style={{
                width: "100px",
                marginLeft: "5px",
              }}
              src={data.avatar_url}
            ></img>
          </td>
          <td style={{ marginLeft: "5px" }}>{data.name}</td>
          <td style={{ marginLeft: "5px" }}>{data.location}</td>
          <td style={{ marginLeft: "5px" }}>{data.bio}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Display;
