import styled from 'styled-components';

const GuestDetailStyle = styled.div`
  width: 100%;
  padding: 36px 0;
  text-align: center;

  .guestDetailInput {
    width: 450px;
    margin: 8px auto;
    .error {
        color: red;
        text-align: left;
    }
  }
  .guestDetailLoading {
    width: 450px;
    margin: 8px auto;
    text-align: center;
  }
`;

export { GuestDetailStyle };
