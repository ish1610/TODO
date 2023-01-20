import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { blue, lightOrange } from "../../Common/styles/commonColor";

const JoinInWrap = styled.div`
  padding: 120px 36px 180px;
  background-color: RGBA(41, 97, 113, 0.2);
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

const JoinIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 30px 50px 60px;

  border: 1px solid ${blue};
  border-radius: 8px;
  background-color: #fff;

  header {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .inputWrap {
    width: 80%;
    margin-bottom: 40px;
  }

  input,
  textarea {
    padding: 8px;
    font-family: inherit;
  }

  button {
    margin-top: 40px;
    background-color: ${lightOrange};
    border: 1px solid ${lightOrange};
    border-radius: 8px;
    color: #fff;
    padding: 10px 40px;
    width: 80%;
    transition: 0.3s;
  }

  button:hover {
    background-color: #fff;
    color: ${lightOrange};
  }
`;

const JoinInView = () => {
  return (
    <JoinInWrap>
      <JoinIn>
        <header>회원가입</header>
        <div className="inputWrap">
          <TextField
            id="inPutValue"
            label="Email"
            variant="standard"
            autoFocus
            fullWidth={true}
            placeholder="이메일을 입력해주세요"
            margin="dense"
            color="warning"
          />
        </div>

        <div className="inputWrap">
          <TextField
            id="inPutValue"
            label="Password"
            variant="standard"
            fullWidth={true}
            placeholder="비밀번호를 입력해주세요"
            margin="dense"
            color="warning"
          />
        </div>

        <div className="inputWrap">
          <TextField
            id="inPutValue"
            label="PasswordConFirm"
            variant="standard"
            fullWidth={true}
            placeholder="비밀번호를 한번 더 입력해주세요"
            margin="dense"
            color="warning"
            //   error={true}
          />
        </div>

        <button>회원가입</button>
      </JoinIn>
    </JoinInWrap>
  );
};

export default JoinInView;
