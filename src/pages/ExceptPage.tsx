import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const ExceptPage = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
      const titEle = document.getElementsByTagName('title')[0];
      titEle.innerHTML = `에러 페이지`;
    },[]);
  
    const fncToMainPage = () => {
      navigate("/", { replace: true });
    };
  
    return (
      <div>
        <header>
          <h2>정보가 없는 페이지 입니다.</h2>
          <button onClick={fncToMainPage}>메인으로 가기</button>
        </header>
      </div>
    );
  };
  
  export default ExceptPage;
  