import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = ()=>{
        if(parseInt(this.props.permission,20) === 1){
            return "Admin";
        } else if (parseInt(this.props.permission,20) === 2){
            return "Moderator";
        } else {
            return "Normal User";
        }
    }
    editClick = ()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={()=>this.editClick()} className="btn btn-warning"><i className="fa fa-edit" />Sửa</div>
                        <div onClick={(idUser)=>this.props.deleteClick(this.props.id)} className="btn btn-danger"><i className="fa fa-delete" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;