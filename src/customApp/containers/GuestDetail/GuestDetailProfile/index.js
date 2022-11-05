import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    TimePicker,
} from 'antd';
import moment from 'moment';
import {
    GuestDetailProfileStyle,
} from './guestDetailProfile.style';
import IntlMessages from "../../../../components/utility/intlMessages";
import basicStyle from '../../../../settings/basicStyle';

const format = 'HH:mm';

const GuestDetailProfile = (props) => {
    const {
        data,
    } = props;
    const [arrivalTime, setArrivalTime] = useState(data.arrival_time || new Date());
    const [error, setError] = useState('');
    const [submittedData, setSubmittedData] = useState(false);
    const { rowStyle } = basicStyle;

    useEffect(() => {
        if (data.arrival_time) {
            setSubmittedData(true);
        }
    }, [data.arrival_time])

    const handleUpdate = (open) => {
        if (!open) {
            let dataBody = {
                arrival_time: arrivalTime
            }
            fetch(`https://bv-online-assessment.herokuapp.com/api/bookings/${data.booking_code}/update-eta`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataBody),
            })
                .then((res) => res.json())
                .then(() => setSubmittedData(true))
                .catch(() => setError('guestDetailProfile.error'))
        }
    }

    return(
        <GuestDetailProfileStyle>
            <div className='guestDetailProfileImg'>
                <img src={data.profile_picture} alt={data.guest_name} />
            </div>
            <h3 className='guestDetailProfileDivider'><IntlMessages id='guestDetailProfile.hi' /> {data.guest_name}!</h3>
            <p className='guestDetailProfileDivider guestDetailProfileWrapper'><IntlMessages id='guestDetailProfile.thanks' /></p>
            <div className='guestDetailProfileInfo guestDetailProfileWrapper'>
                <Row style={rowStyle} gutter={0} justify="start">
                    <Col className='guestDetailProfileDivider' span={24}>
                        <IntlMessages id='guestDetailProfile.propertyName' /> <b>{data.property_name}</b>
                    </Col>
                    <Col className='guestDetailProfileDivider' span={12}>
                        <IntlMessages id='guestDetailProfile.checkInDate' /> <b>{data.check_in_date}</b>
                    </Col>
                    <Col className='guestDetailProfileDivider' span={12}>
                        <IntlMessages id='guestDetailProfile.checkOutDate' /> <b>{data.check_out_date}</b>
                    </Col>
                    <Col span={24}>
                        <IntlMessages id='guestDetailProfile.arrivalTime' /> 
                        {
                            !submittedData ? (
                                <>
                                    <TimePicker value={moment(arrivalTime, format)} format={format} onChange={(val, valString) => {setArrivalTime(valString); setError('')}} onOpenChange={(open) => handleUpdate(open)} />
                                    <span className='guestDetailProfileHelp'><IntlMessages id='guestDetailProfile.arrivalTimeEmpty' /></span>
                                </>
                            ) : (
                                <>
                                    <b style={{ marginLeft: '4px' }}>{arrivalTime}</b>
                                    <div className='guestDetailProfileHelp guestDetailProfileSuccess'><IntlMessages id='guestDetailProfile.success' /></div>
                                </>
                            )
                        }
                        {
                            error && (
                                <div className='error'>{error && (<IntlMessages id={error} />)}</div>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </GuestDetailProfileStyle>
    )
}

export default GuestDetailProfile;