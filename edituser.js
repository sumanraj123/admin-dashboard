import React, { useState, useContext, useEffect } from "react";
import { getCurrentUserData, updateCurrentUserData } from "./api"
import userContext from "./usercontext";
function EditUser(props) {

    let uniqueId;

    uniqueId = parseInt(props.match.params.id);
    // let users = useContext(userContext);
    // let currentUser = users.userList[`${uniqueId}`];



    let [editName, setEditName] = useState("");
    let [editPosition, setEditPosition] = useState("");
    let [editOffice, setEditOffice] = useState("");
    let [editSalary, setEditSalary] = useState("");

    //too much requests are sending so put inside useEffect with an empty array so that it will once(mount)
    useEffect(async () => {
        let currentUser = await getCurrentUserData(uniqueId);
        setEditName(currentUser.data.name);
        setEditPosition(currentUser.data.position);
        setEditOffice(currentUser.data.office);
        setEditSalary(currentUser.data.salary);
    }, [])



    async function updateUserData(obj) {
        await updateCurrentUserData(uniqueId,obj);
        setEditName("");
        setEditPosition("");
        setEditOffice("");
        setEditSalary("");
    }

    function updateUser(e) {
        e.preventDefault();
        // let obj = {
        //     uniqueId, name, position, office, salary
        // }
        // users.userList[uniqueId] = obj;
        // users.setUserList([...users.userList]);
        let obj = {
            name:editName, position:editPosition, office:editOffice, salary:editSalary
        }
        updateUserData(obj);
    }
    return (
        <div className="container">
            <h1>Edit User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={editName} onChange={(e) => {
                        setEditName(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="pos">Position</label>
                    <input type="text" className="form-control" id="pos" name="pos" value={editPosition} onChange={(e) => {
                        setEditPosition(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="office">Office</label>
                    <input type="text" className="form-control" id="office" name="office" value={editOffice} onChange={(e) => {
                        setEditOffice(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" className="form-control" id="salary" name="salary" value={editSalary} onChange={(e) => {
                        setEditSalary(e.target.value);
                    }} />
                </div>
                <button type="submit" className="btn btn-success" onClick={(e) => updateUser(e)}>Submit</button>
            </form>
        </div>
    );
}
export default EditUser;