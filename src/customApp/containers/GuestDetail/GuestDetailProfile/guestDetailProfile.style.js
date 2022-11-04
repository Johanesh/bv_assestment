import styled from 'styled-components';

const GuestDetailProfileStyle = styled.div`
  width: 580px;
  margin: 36px auto;

  .guestDetailProfileWrapper {
    width: 75%;
    margin: auto;
  }

  .guestDetailProfileDivider {
    margin-bottom: 24px;
  }

  .guestDetailProfileInfo {
    border: 2px solid #2d3446;
    border-radius: 4px;
    padding: 16px;
    text-align: left;
  }

  .guestDetailProfileImg {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    margin: 0 auto 16px;
    img {
        width: 100%;
        height: 100%;
    }
  }
`;

export { GuestDetailProfileStyle };
