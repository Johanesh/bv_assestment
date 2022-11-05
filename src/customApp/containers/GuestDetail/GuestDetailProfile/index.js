import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    TimePicker,
    Tooltip,
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
    const [arrivalTime, setArrivalTime] = useState('');
    const { rowStyle } = basicStyle;

    useEffect(() => {
        setArrivalTime(data.arrival_time);
    }, [data.arrival_time])

    const handleChange = (value) => {
        console.log(value);
    }

    const handleUpdate = (open) => {
        if (!open) {
            console.log('update');
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
                        <IntlMessages id='guestDetailProfile.arrivalTime' /> <TimePicker value={arrivalTime ? moment(arrivalTime, format) : moment(new Date(), format)} format={format} onChange={(val, valString) => handleChange(valString)} onOpenChange={(open) => handleUpdate(open)} />
                        {
                            !arrivalTime && (
                                <span className='guestDetailProfileHelp'><IntlMessages id='guestDetailProfile.arrivalTimeEmpty' /></span>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </GuestDetailProfileStyle>
    )
}

export default GuestDetailProfile;