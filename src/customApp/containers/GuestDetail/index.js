import React, { useState } from 'react';
import {
    Input
} from 'antd';
import {
    GuestDetailStyle,
} from './guestDetail.style';
import {
    validateAlphaNumOnly,
} from '../../helpers/validators';
import IntlMessages from "../../../components/utility/intlMessages";

const GuestDetail = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('')

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
            console.log('submit');
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
        </GuestDetailStyle>
    )
}

export default GuestDetail;