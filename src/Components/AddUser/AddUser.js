import React, { Component } from 'react';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            id: "",
            name: "",
            phone: "",
            permission: ""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        //Package to Item
        // var item = {}; // Khai bao kieu doi tuong
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.phone = this.state.phone;
        // item.permission = this.state.permission;
    }
    changeStatus = (event) => {
        this.setState({
            status: !this.state.status
        });
    }

    showButton = () => {
        if (this.props.status === true) {
            return <div onClick={(event) => this.changeStatus(event)} className="btn btn-block btn-outline-secondary">Đóng</div>;
        }
        else {
            return <div onClick={(event) => this.changeStatus(event)} className="btn btn-block btn-outline-info">Thêm Mới</div>;
        }
    }
    showForm = () => {
        if (this.props.status === true) {
            return (
                <div className="card text-white bg-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                    <form>
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input name="name" onChange={(event) => this.isChange(event)} style={{ margin: '5px' }} type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                                <input name="phone" onChange={(event) => this.isChange(event)} style={{ margin: '5px' }} type="text" className="form-control" aria-describedby="helpId" placeholder="Điện Thoại" />
                                <div className="mb-3">
                                    <select onChange={(event) => this.isChange(event)} name="permission" style={{ margin: '5px' }} className="custom-select" required>
                                        <option value>Chọn Quyền Mặc Định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderate</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="reset" onClick={(name, phone, permission) => this.props.add(this.state.name, this.state.phone, this.state.permission)} style={{ margin: '5px' }} className="btn btn-block btn-secondary" value="Thêm mới" />
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        console.log(this.props.status);
        return (
            <div className="col-3">
                {
                    this.showForm()
                }
            </div>
        );
    }
}

export default AddUser;