import React from 'react';
import './myprofile.css';


// images
import imgPhoneCamera from '../../images/svg/photo-camera.svg';
import UserAvatar from '../../images/user-avatar-image-change.png'
import {connect} from "react-redux";
import axios from "axios";
import {userSignInAC} from "../../Redux/Selectors/Ayu-Selector";


class MyProfile extends React.Component {

    constructor(props){
        super(props);

    };

    handleChangelogin = (e, id) => {
        this.setState({errorlogin: ''});
        let value = e.currentTarget.value;
        let inputslogin = this.state.inputslogin;
        let input = inputslogin[id];
        input.value = value;
        input.isTuched = true;
        Object.keys(input.validation).map((elm, index) => {
            if (elm == "required") {
                if (value == "" || value == null) {
                    input.isValid = false;
                } else {
                    input.isValid = true
                }

            } else if (elm == "email") {
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(value)) {
                    input.isValid = true;
                } else {
                    input.isValid = false
                }
            }
        })
    };

EditPrfile = (e)=>{
    // e.preventDefault();
    // let email = this.props.userData[0].value;
    // // value = {this.props.userData.email}

    e.preventDefault();
    // value = {this.props.userData.username}
    let userName = this.props.userData.username[0].value;
    let email = this.props.userData[1].value;
    let phone = this.props.userData[2].value;

    if (email && userName &&  phone) {
        if (this.state.inputslogin[0].isValid) {
            // if () {
                // axios.post('http://localhost:5000/api/auth/login', {email, password})
                axios.post('', {email, userName, phone})
                    .then(res => {
                        if (res.status === 200) {

                            this.props.dispatch(userSignInAC(res.data.user.local));
                            this.props.history.push('/profile/contacts');
                        }
                    }).catch(errr => {
                    // console.log(errr);
                    this.setState({errorlogin: "Invalid user!!!"})

                })


            } else {
                this.setState({errorlogin: "Can not be more than 8 characters"})
            }
        } else {
            this.setState({errorlogin: "incorrect email!"})
        }
    // } else {
    //     this.setState({errorlogin: "all fields are required"})
    // }

};


    render() {
        return (
            <div id="profile">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button  onClick={() => this.props.closeModal()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="profile-changes-banner">
                                <div className="content-name">
                                    <h2>Profile</h2>
                                </div>
                                <form  className="ng-pristine ng-valid">


                                    <div className="form-group">
                                        <div className="name-img-group">
                                            <div>
                                    <span className="change-image-icon">
                                            <input type="file" onChange="readURL(this);" title="Change Picture" />
                                        <span>
                                            <span>
                                                <img src={imgPhoneCamera}/>

                                                {/*<img src={require("../../images/svg/photo-camera.svg")}/>*/}

                                            </span>
                                            <span>
                                                Change Picture
                                            </span>
                                        </span>
                                    </span>

                                                <img src={UserAvatar}/>

                                            </div>
                                            {/*<p className="user-name">{this.props.userData.username}</p>*/}
                                            <div>
                                                <label htmlFor="username_change">UserName</label>
                                                <input type="text" className="form-control" id="username_change" value={this.props.userData.username}
                                                       placeholder=""
                                                       onChange={(e) => this.handleChangelogin(e, 0)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_email_change">E-mail</label>
                                        <input type="email" className="form-control" id="user_email_change" value={this.props.userData.email}
                                               placeholder=""
                                               onChange={(e) => this.handleChangelogin(e, 1)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_phone_change">Phone Number</label>
                                        <input type="text" className="form-control" id="user_phone_change" value={this.props.userData.phone}
                                              onChange={(e) => this.handleChangelogin(e, 2)}
                                        />
                                    </div>
                                    <div className="form-group date-time-group">
                                        <label htmlFor="date_time">Date &amp; Time</label>
                                        <select className="form-control" id="date_time">
                                            <option value="(GMT +2:00) 10:13 PM 03/23/20">(GMT +2:00) 10:13 PM
                                                03/23/20
                                            </option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <div className="">
                                            <div className="check-agree-bar">
                                                <input type="checkbox" className="form-check-input"
                                                       id="date_time_automatic" />
                                                <label className="form-check-label"
                                                       htmlFor="date_time_automatic">Automatically</label>
                                                <span className="checkmark"></span>
                                            </div>
                                            <div className="check-agree-bar">
                                                <input type="checkbox" className="form-check-input"
                                                       id="date_time_24hour"/>
                                                <label className="form-check-label" htmlFor="date_time_24hour">Use
                                                    24-hour time</label>
                                                <span className="checkmark"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="language">Language</label>
                                            <select className="form-control" id="language">
                                                <option value="English">English</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="changes-pass-banner">
                                        <div className="form-group">
                                            <label htmlFor="user_register_pass">Change Password</label>
                                            <input type="password" className="form-control" id="user_register_pass"
                                                   placeholder="Old Password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_new_pass_change"></label>
                                            <input type="password" className="form-control" id="user_new_pass_change"
                                                   placeholder="New Password" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="user_new_pass_change_confirm"></label>
                                            <input type="password" className="form-control"
                                                   id="user_new_pass_change_confirm" placeholder="Confirm Password" />
                                        </div>
                                        <div className="save-changes-bar">
                                            <input type="submit" className="save-changes" id="save-profile-changes"
                                                   // value="Save"
                                                   value="Save" onClick={this.EditPrfile}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// export default MyProfile;

const mapStateToProps = state => ({userData: state.auth});

export default connect(mapStateToProps)(MyProfile);
