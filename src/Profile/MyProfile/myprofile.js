import React from 'react';
import './myprofile.css';


class MyProfile extends React.Component {
    render() {
        return (
            // <!-- Modal Profile -->

            <div className="modal fade" id="profile" tabindex="-1" role="dialog"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={this.props.closeprofile} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="profile-changes-banner">
                                <div className="content-name">
                                    <h2>Profile</h2>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <div className="name-img-group">
                                            <div>
                                    <span className="change-image-icon">
                                            <input type='file' onchange="readURL(this)" title="Change Picture"/>
                                        <span>
                                            <span>

                                                <img src={require("../../images/svg/photo-camera.svg")}/>

                                            </span>
                                            <span>
                                                Change Picture
                                            </span>
                                        </span>
                                    </span>

                                                <img src={require("../../images/user-avatar-image-change.png")}/>
                                                <img src={require("../../images/user-avatar-image-change.png")}/>

                                            </div>
                                            <div>
                                                <label for="username_change">Name</label>
                                                <input type="text" className="form-control" id="username_change"
                                                       placeholder="Name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="user_email_change">E-mail</label>
                                        <input type="email" className="form-control" id="user_email_change"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="form-group date-time-group">
                                        <label for="date_time">Date & Time</label>
                                        <select className="form-control" id="date_time">
                                            <option>(GMT +2:00) 10:13 PM 03/23/20</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <div className="">
                                            <div className="check-agree-bar">
                                                <input type="checkbox" className="form-check-input"
                                                       id="date_time_automatic"/>
                                                <label className="form-check-label"
                                                       for="date_time_automatic">Automatically</label>
                                                <span className="checkmark"></span>
                                            </div>
                                            <div className="check-agree-bar">
                                                <input type="checkbox" className="form-check-input"
                                                       id="date_time_24hour"/>
                                                <label className="form-check-label" for="date_time_24hour">Use 24-hour
                                                    time</label>
                                                <span className="checkmark"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label for="language">Language</label>
                                            <select className="form-control" id="language">
                                                <option>English</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="changes-pass-banner">
                                        <div className="form-group">
                                            <label for="user_register_pass">Change Password</label>
                                            <input type="password" className="form-control" id="user_register_pass"
                                                   placeholder="Old Password"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="user_new_pass_change"></label>
                                            <input type="password" className="form-control" id="user_new_pass_change"
                                                   placeholder="New Password"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label for="user_new_pass_change_confirm"></label>
                                            <input type="password" className="form-control"
                                                   id="user_new_pass_change_confirm"
                                                   placeholder="Confirm Password"/>
                                        </div>
                                        <div className="save-changes-bar">
                                            <input type="submit" className="save-changes" id="save-profile-changes"
                                                   value="Save"/>
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
