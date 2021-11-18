import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            phone:this.props.userEditObject.phone,
            permission:this.props.userEditObject.permission
        }
    }
    
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton = ()=>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="card text-white bg-warning mb-3 mt-2" style={{ width: '100%' }}>
                        <form>
                            <div className="card-header text-center">Sửa Thông Tin User</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name" style={{ margin: '5px' }} type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.phone} name="phone" style={{ margin: '5px' }} type="text" className="form-control" aria-describedby="helpId" placeholder="Điện Thoại" />
                                    <div className="mb-3">
                                        <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} name="permission" style={{ margin: '5px' }} className="custom-select" required>
                                            <option value>Chọn Quyền Mặc Định</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderate</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                        <div className="invalid-feedback">Example invalid custom select feedback</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input onClick={()=>this.saveButton()} type="button" style={{ margin: '5px' }} className="btn btn-block btn-danger" value="Lưu" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;