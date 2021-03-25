import React, { useContext, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { getUserData, deleteCurrentUser } from "./api"
import userContext from "./usercontext";
function Users() {
    // let users = useContext(userContext);
    // console.log(users.userList);
    let [userData, setuserData] = useState([]);

    useEffect(async () => {
        let users = await getUserData();
        setuserData(...userData, users.data)
        console.log("Mounted");
        console.log(userData);
    }, []) // Did Mount

    // useEffect(() => {
    //     return () => {
    //         console.log("Unmounted")
    //     } // UnMount
    // }, [])

    // useEffect(() => {
    //     console.log("Updated")
    //     // Did Update
    // }, [userData])

    async function deleteUser(id) {
        await deleteCurrentUser(id);
        let updatedUsers = await getUserData();
        setuserData(updatedUsers.data);
    }

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <Link className="text-success float-right" to="/createuser">
                    <i className="fas fa-fw fa-user-plus"></i>
                    <span className="pad-5"> Create User</span>
                </Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(userData)}
                            {
                                userData.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.name} </td>
                                        <td>{item.position}</td>
                                        <td>{item.office}</td>
                                        <td>{item.salary}</td>

                                        <td>
                                            {/* <Link className="text-danger" to={`/edituser/${item.uniqueId}`}> */}
                                            <Link className="text-danger" to={`/edituser/${item.id}`}>
                                                <div className="inlineBlock"><i className="fas fa-fw fa-user-edit"></i>
                                                </div>
                                            </Link>
                                            <div className="inlineBlock btn" onClick={() => deleteUser(item.id)}><i className="fas fa-fw fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
export default Users;