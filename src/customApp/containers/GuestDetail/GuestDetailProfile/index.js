import React, { useState } from 'react';
import {
    Row,
    Col,
} from 'antd';
import {
    GuestDetailProfileStyle,
} from './guestDetailProfile.style';
import basicStyle from '../../../../settings/basicStyle';

const GuestDetailProfile = (props) => {
    const {
        data,
    } = props;
    const { rowStyle } = basicStyle;

    return(
        <GuestDetailProfileStyle>
            <div className='guestDetailProfileImg'>
                <img src={data.profile_picture} alt={data.guest_name} />
            </div>
            <h3 className='guestDetailProfileDivider'>Hi, {data.guest_name}!</h3>
            <p className='guestDetailProfileDivider guestDetailProfileWrapper'>Thank you for booking with Bukit Vista. Here are the details of your current booking:</p>
            <div className='guestDetailProfileInfo guestDetailProfileWrapper'>
                <Row style={rowStyle} gutter={0} justify="start">
                    <Col className='guestDetailProfileDivider' span={24}>
                        Property name: <b>{data.property_name}</b>
                    </Col>
                    <Col className='guestDetailProfileDivider' span={12}>
                        Check in date: <b>{data.check_in_date}</b>
                    </Col>
                    <Col className='guestDetailProfileDivider' span={12}>
                        Check out date: <b>{data.check_out_date}</b>
                    </Col>
                    <Col span={24}>
                        Arrival time: <b>{data.arrival_time}</b>
                    </Col>
                </Row>
            </div>
        </GuestDetailProfileStyle>
    )
}

export default GuestDetailProfile;