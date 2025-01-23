import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateUser  } from '../features/userdetailSlice';

const Editdata = () => {
    const { id } = useParams();
    const [updateData, setUpdateData] = useState({});
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.app);
    const navigate = useNavigate();

    useEffect(() => {
        if (id && users.length > 0) {
            const singleUser  = users.filter((user) => user.id === Number(id));
            setUpdateData(singleUser [0]);
        }
    }, [id, users]);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser (updateData));
        navigate("/");
    };

    return (
        <div>
            <h2 className="my-2">Edit the data</h2>
            <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        value={updateData.first_name || ''}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        value={updateData.last_name || ''}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={updateData.email || ''}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <input
                        type="text"
                        name="gender"
                        className="form-control"
                        value={updateData.gender || ''}
                        onChange={newData}
                    />
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Editdata;