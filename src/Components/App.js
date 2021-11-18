import './../App.css';
import React, { Component } from 'react';
import AddUser from './AddUser/AddUser';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import TableData from './TableData/TableData';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:false,
      data : [],
      searchText : "",
      editUserStatus : false,
      userEditObject:{}
    }
  }
  //Truoc khi render phai khoi tao du lieu
  componentWillMount() {
    //Kiem tra xem da co localStorage hay chua
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData",JSON.stringify(DataUser));
      this.setState({
        data:DataUser
      });
    } else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data:temp
      });
    }
  }
  
  deleteUser = (idUser)=>{
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    });
    //Day du lieu 
    localStorage.setItem("userData",JSON.stringify(tempData));
  }
  getUserEditInfoApp = (info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
    localStorage.setItem("userData",JSON.stringify(this.state.data));
  }
  changeEditUserStatus = ()=>{
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }
  editUser = (user)=>{
    console.log("Ok");
    this.setState({
      userEditObject:user
    });
  }
  getNewUserData = (name,phone,permission)=>{
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    //Day du lieu 
     localStorage.setItem("userData",JSON.stringify(items));
  }
  changStatus = ()=>{
    this.setState({
      status: !this.state.status
    });
  }
  getTextSearch = (dl)=>{
    this.setState({
      searchText : dl
    });
  }
  render() {
    // localStorage.setItem("userData",JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        // !== -1 => Have Item
        ketqua.push(item);
      }
    })
 // First time => In ra toàn bộ mảng bởi về indexOf("" !== -1) => true
    return (
      <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <SearchForm getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)} userEditObject={this.state.userEditObject} ketNoi={()=>this.changStatus()} status={this.state.status}
              check ={(dl)=>this.getTextSearch(dl)} editUserStatus={this.state.editUserStatus }  changeEditUserStatus={()=>this.changeEditUserStatus()}
              />
          </div>
          <div className="row">
            <TableData deleteUser={(idUser)=>this.deleteUser(idUser) } changeEditUserStatus={()=>this.changeEditUserStatus()} editFun={(user)=>this.editUser(user)} dataUserProps={ketqua}/>
            <AddUser add={(name,phone,permission)=>this.getNewUserData(name,phone,permission)} status ={this.state.status}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default App;
