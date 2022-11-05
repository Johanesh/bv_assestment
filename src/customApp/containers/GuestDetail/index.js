import React, { useState } from 'react';
import {
    Input,
    Spin,
} from 'antd';
import {
    GuestDetailStyle,
} from './guestDetail.style';
import GuestDetailProfile from './GuestDetailProfile';
import {
    validateAlphaNumOnly,
} from '../../helpers/validators';
import IntlMessages from "../../../components/utility/intlMessages";

const GuestDetail = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const checkError = () => {
        let isError = false;
        if (!code) {
            isError = true;
            setError('guestDetail.errorEmpty');
        }else if (code && !validateAlphaNumOnly(code)) {
            isError = true;
            setError('guestDetail.errorAlphaNumeric');
        }

        return isError;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!checkError()) {
            setIsLoading(true);
            setError('');
            fetch(`https://bv-online-assessment.herokuapp.com/api/bookings/${code}`)
                .then((res) => res.json())
                .then((resData) => setData(resData))
                .catch(() => setError('guestDetail.notFound'))
                .finally(() => setIsLoading(false))
        }
    }

    return(
        <GuestDetailStyle>
            <h3><IntlMessages id="guestDetail.label" /></h3>
            <div className='guestDetailInput'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Input value={code} onChange={(e) => {setCode(e.target.value.toUpperCase()); setError('');}}/>
                    <div className='error'>{error && (<IntlMessages id={error} />)}</div>
                </form>
            </div>
            {
                isLoading && (
                    <div className='guestDetailLoading'>
                        <Spin size="large" />
                    </div>
                )
            }
            {
                Object.keys(data).length !== 0 && (
                    <GuestDetailProfile data={data} />
                )
            }
        </GuestDetailStyle>
    )
}

export default GuestDetail;