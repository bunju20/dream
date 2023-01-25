import * as React from 'react';
import './Dia.css';

import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';
function Dia() {
  //const navigate = useNavigate();
 
  //const navigateToMain = () => {
  //  navigate("/main");
  //};

  return (
    <div>
      <Paper elevation={3}
  style={{ margin: "30px 100px 30px 100px"}}>
    <div class = "contents">
      <Stack direction="column"
  justifyContent="flex-start"
  text-align = "center"
  alignItems="center"
  spacing={1}
>
  <h1>이메일 인증</h1>
  <p>인증메일이 bbq@naver.com (으)로 전송되었습니다.</p>
  <p>받으신 이메일을 열어 버튼을 클릭하면 가입이 완료됩니다.</p>

   <h5>이메일을 확인할수 없나요?</h5>
   <h5>스팸편지함 확인 또는 인증 메일 다시 보내기</h5>
  
   <Button variant="outlined">확인</Button>
   
</Stack>
</div>
      </Paper>
    </div>
    
  );
}

export default Dia;