import React from 'react'

const Task = () => {
    return (
        <div className='container rounded-1'>
            <header className='align-items-center border d-flex justify-content-between p-3 rounded-1'>
                <h4 style={{ "color": "#2592D1" }}>Fickle Flight</h4>
                <div className='d-flex justify-content-between gap-3 menu-container'>
                    <a className='' href="javascript:void(0)">Explore</a>
                    <a className='' href="javascript:void(0)">Search</a>
                    <a className='' href="javascript:void(0)">Hotels</a>
                    <a className='' href="javascript:void(0)">Offers</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20.576 26.004">
                        <path fill="#343a40" d="M73.586,20.694a4.04,4.04,0,0,1-1.228-1.672,19.345,19.345,0,0,1-1.28-7.644c0-.01,0-.02,0-.029a7.378,7.378,0,0,0-4.343-6.692V2.9A2.9,2.9,0,0,0,63.842,0H63.6A2.9,2.9,0,0,0,60.71,2.9v1.76a7.378,7.378,0,0,0-4.344,6.721,19.345,19.345,0,0,1-1.28,7.644,4.04,4.04,0,0,1-1.228,1.672.741.741,0,0,0-.407.842.775.775,0,0,0,.764.6H59.8a3.922,3.922,0,0,0,7.844,0h5.584a.775.775,0,0,0,.764-.6A.741.741,0,0,0,73.586,20.694ZM62.234,2.9A1.371,1.371,0,0,1,63.6,1.526h.24A1.371,1.371,0,0,1,65.21,2.9V4.162a7.379,7.379,0,0,0-2.976,0V2.9Zm1.488,21.581a2.4,2.4,0,0,1-2.4-2.346h4.8A2.4,2.4,0,0,1,63.722,24.478Zm3.068-3.872H55.952a7.984,7.984,0,0,0,.4-.7,19.288,19.288,0,0,0,1.539-8.527,5.832,5.832,0,1,1,11.663,0c0,.009,0,.019,0,.028a19.249,19.249,0,0,0,1.539,8.5,7.992,7.992,0,0,0,.4.7Z" transform="translate(-53.434)"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44 44">
                        <g id="profile_black_icon_44px" transform="translate(0 -0.25)">
                            <rect id="Rectangle_3294" data-name="Rectangle 3294" width="44" height="44" transform="translate(0 0.25)" fill="none" />
                            <g id="Group_14561" data-name="Group 14561" transform="translate(0 0.25)">
                                <g id="Group_14560" data-name="Group 14560">
                                    <path id="Union_139" data-name="Union 139" d="M5.15,44A5.16,5.16,0,0,1,0,38.846,17.179,17.179,0,0,1,3.825,28.03a12.449,12.449,0,0,1,9.745-4.56,13.817,13.817,0,0,1,4.331.7,13.455,13.455,0,0,0,8.143,0l0,0a12.839,12.839,0,0,1,14.076,3.806A17.238,17.238,0,0,1,44,38.846,5.16,5.16,0,0,1,38.846,44Zm.759-14.336a14.561,14.561,0,0,0-3.255,9.183,2.53,2.53,0,0,0,2.5,2.5h33.7a2.506,2.506,0,0,0,2.5-2.445,14.548,14.548,0,0,0-3.253-9.183,10.186,10.186,0,0,0-11.2-3.016,16.1,16.1,0,0,1-9.779,0,10,10,0,0,0-3.486-.585A9.756,9.756,0,0,0,5.909,29.664Zm4.426-18A11.664,11.664,0,1,1,22,23.327,11.677,11.677,0,0,1,10.335,11.666Zm2.658,0A9.007,9.007,0,1,0,22,2.657,9.018,9.018,0,0,0,12.993,11.666Z" fill="#080808" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </header>
            <div className='bg-primary d-flex flex-column justify-content-center' style={{ height: "600px" }} >
                <h4 className='text-white fw-bolder'>Let’s explore & travel the world</h4>
                <p className='text-white'>Find the best destinations and the most popular stays!</p>
                <div className='search-container p-3 bg-white rounded-2'>
                    <div className='d-flex justify-content-between rounded-2'>
                        <p className='mb-2'>SEARCH FLIGHTS</p>
                        <div>
                            <input type="radio" id="return" name="return" value="return" className='me-2'/>
                            <label for="return" className='me-3'>Return</label>
                            <input type="radio" id="oneWay" name="oneWay" value="oneWay" className='me-2'/>
                            <label for="oneWay">One-Way</label>
                        </div>
                    </div>
                    <div class="each-row row">
                        <div class="col-3">
                            <div class="form-group each-group has-float-label">
                                <input type="text" class="form-control type-address" id="departure" name="departure" maxlength="40" autocomplete="off" placeholder=" " value="" />
                                <label for="departure">Departure </label>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group has-float-label each-group form-group-error">
                                <input type="text" class="form-control type-address" id="arrival" name="arrival" maxlength="10" autocomplete="off" placeholder=" " value="" />
                                <label for="arrival">arrival</label>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group has-float-label each-group form-group-error">
                                <input type="date" class="form-control type-address" id="date" name="date" maxlength="20" autocomplete="off" placeholder=" " value="" />
                                <label className='text-secondary' for="date">Date </label>
                            </div>
                        </div>
                        <div class="col-3">
                            <button className='bg-warning border-0 p-2 rounded-2'>Search Flights</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Task