import React, { Component } from 'react';
import TableDataRow from '../TableDataRow/TableDataRow';

class TableData extends Component {
    deleteClick = (idUser)=>{
        this.props.deleteUser(idUser);
    }
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataUserProps.map((value,key)=>(
                            <TableDataRow deleteClick = {(idUser)=>this.deleteClick(idUser)} changeEditUserStatus={()=>this.props.changeEditUserStatus()} editFunClick={(user)=>this.props.editFun(value)} 
                            stt={key} key={key} userName={value.name} phone={value.phone} permission={value.permission}
                            id={value.id}/>
                        ))}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;