import styled from "@emotion/styled";

export const DateInput = styled.div`
  display: flex;
  .react-date-picker__wrapper{
    border:none;
    padding:0 10px;
  }

`
export const SelectStyle = styled.select`
  border: none;
  font-weight:600;
  font-size:16px;
`
export const SchInputStyle = styled.div`
  margin-left: 10px;
  box-sizing: border-box;
  input[type="text"] {
    width: 88%;
    height: 100%;
    padding: 0 10px;
    font-size:18px;
    box-sizing: border-box;
    border:none;
  }
  .btn-sch {
    color:var(--c-b-base);
      font-size:34px;
  }
`
export const BtnMore = styled.button`
  display: block;
  margin: 40px auto 0px;
  padding: 0 32px 0 16px;
  min-width: 112px;
  line-height: 30px;
  border: 1px solid var(--border-gray);
  color: var(--c-gray);
  border-radius:30px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 34%;
    right: 10px;
    vertical-align: 3px;
    width: 5px;
    height: 5px;
    margin-left: 10px;
    border-left: 2px solid var(--c-gray);
    border-bottom: 2px solid var(--c-gray);
    transform: rotate(-45deg);
  }
`
