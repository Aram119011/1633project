import React from 'react';
import './myprofile.css';


// images
import imgPhoneCamera from '../../images/svg/photo-camera.svg';
import UserAvatar from '../../images/user-avatar-image-change.png'


class MyProfile extends React.Component {
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
                                            <div>
                                                <label htmlFor="username_change">Name</label>
                                                <input type="text" className="form-control" id="username_change"
                                                       placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_email_change">E-mail</label>
                                        <input type="email" className="form-control" id="user_email_change"
                                               placeholder="Email" />
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
                                                   value="Save" />
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

export default MyProfile;
