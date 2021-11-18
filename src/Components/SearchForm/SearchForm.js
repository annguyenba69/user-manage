import React, { Component } from 'react';
import EditUser from '../EditUser/EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj:{}
        }
    }

    showButton = () => {
        if (this.props.status === true) {
            return <div className="btn btn-info ml-2" onClick={() => this.props.ketNoi()}>Close</div>
        } else {
            return <div className="btn btn-info ml-2" onClick={() => this.props.ketNoi()}>Add</div>
        }
    }
    isChange = (event) => {
        console.log(this.state.tempValue);
        this.setState({
            tempValue: event.target.value
        });
        this.props.check(this.state.tempValue);
    }
    getUserEditInfo =(info)=>{
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStatus === true){
            return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)}  userEditObject={this.props.userEditObject} changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <form className="form-inline">
                    <div className="form-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Enter Name" />
                        <div onClick={(dl) => this.props.check(this.state.tempValue)} className="btn btn-info">Tìm Kiếm</div>
                    </div>
                    {this.showButton()}
                </form>
                <hr />
            </div>
        );
    }
}

export default SearchForm;