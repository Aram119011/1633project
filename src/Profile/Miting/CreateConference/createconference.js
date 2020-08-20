import React from 'react';
import './createconference.css'


class CreatConferance extends React.Component {
    render() {
        return (
            <div className="modal fade" id="createConferenceModal" tabIndex="-1" role="dialog"
                 aria-labelledby="Create Conference"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                        </div>
                        <div className="modal-body create-conference-bar">
                            <div className="content-name">
                                <h2>Create Conference</h2>
                            </div>
                            <form>
                                <div className="items-bar">
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-1" value="conference-person-1"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-2" value="conference-person-2" checked/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-3" value="conference-person-3"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            <img src="images/sent-by-user.png" alt="" title=""/>
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-4" value="conference-person-4" checked/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-5" value="conference-person-5"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="" >*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-6" value="conference-person-6"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-7" value="conference-person-7" checked/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-8" value="conference-person-8"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                            sent-user-name
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-9" value="conference-person-9" checked/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-10" value="conference-person-10"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-11" value="conference-person-11"
                                                       checked/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-12" value="conference-person-12"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <img src={require("../../../images/sent-by-user.png")}/>

                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-13" value="conference-person-13"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <img src={require("../../../images/sent-by-user.png")}/>

                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-14" value="conference-person-14"
                                                       checked/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="person-item">
                                        <div className="person-info">
                                            {/*<img src="images/sent-by-user.png" alt="" title="">*/}
                                            <img src={require("../../../images/sent-by-user.png")}/>

                                            <div>
                                                <h4>Morris Bell</h4>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input"
                                                       name="conference-person-15" value="conference-person-15"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-bar">
                                    <div>
                                        <input type="submit" value="Call"/>
                                        <input type="submit" value="Video Call"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreatConferance
