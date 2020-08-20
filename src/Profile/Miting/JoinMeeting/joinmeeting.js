import React from 'react';
import './joinmeeting.css';

class JoinMeeting extends React.Component {
    render() {
        return (
            <div className="modal fade" id="joinMeetingModal" tabIndex="-1" role="dialog" aria-labelledby="Join Meeting"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="content-name">
                                <h2>Join Meeting</h2>
                            </div>
                            <div className="form-bar">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="meetingID">Meeting ID</label>
                                        <input type="text" className="form-control" id="meetingID"
                                               placeholder="Meeting ID"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="personName">Your Name</label>
                                        <input type="text" className="form-control" id="personName" placeholder="Name"/>
                                    </div>
                                    <div className="join-btn-bar">
                                        <input type="submit" value="Join"/>
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

export default JoinMeeting;
