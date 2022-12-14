import styled from 'styled-components';

const GuestDetailProfileStyle = styled.div`
  width: 580px;
  background-color: #fff;
  margin: 36px auto;
  padding: 36px 0;
  border: 1px solid #bebebe;

  .guestDetailProfileWrapper {
    width: 450px;
    margin: auto;
    .error {
      color: red;
      text-align: left;
    }
  }

  .guestDetailProfileDivider {
    margin-bottom: 16px;
  }

  .guestDetailProfileInfo {
    padding: 16px;
    text-align: left;
  }

  .guestDetailProfileHelp {
    font-size: 12px;
    color: #bebebe;
    margin-left: 16px;
  }

  .guestDetailProfileSuccess {
    margin-left: 0;
  }

  .guestDetailProfileImg {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto 16px;
    background-color: #bebebe;
    img {
        width: 100%;
        height: 100%;
    }
  }
`;

export { GuestDetailProfileStyle };
