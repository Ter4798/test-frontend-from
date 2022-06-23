import React from "react";
import axios from "axios";

import { Table, Image } from "react-bootstrap";
import {BsEyeFill} from "react-icons/bs";
import{Link} from "react-router-dom"
import "./FormData.css";

const FormData = () => {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/users");
        // console.log(resp.data.data)
        setUser(resp.data.data);

      } catch (error) {
        return(
          <div className="text-center mt5">
            <p>connect failed</p>
          </div>
        )
      }
    };

    getData();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col mt-12">
          <h2>Form Data</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Picture</th>
                <th>UserName</th>
                <th>NickName</th>
                <th>FirstName</th>
                <th>position</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {user.map((p, index) => {
                return (
                  <tr key={p._id}>
                    <td>
                      <Image
                        src={p.profileImage}
                        thumbnail
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>{p.userName}</td>
                    <td>{p.nickName}</td>
                    <td>
                    {p.firstName}
                    {/* {p.skill.map((s, index) => {
                        return(
                          <>
                            {s.name}
                            {s.level}
                          </>
                        )
                    }
                    )} */}
                    </td>
                    <td>{p.position}</td>
                    <td>
                      <Link to= {`/detail/${p._id}`}>
                      <BsEyeFill/>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FormData;
