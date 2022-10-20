import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api/api";

interface RegisterData {
  email: string;
  password1: string;
  password2: string;
  [key: string]: string;
}

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterData>({
    email: "",
    password1: "",
    password2: "",
    
  });

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
  const validateEmail = (registerObj: RegisterData) => {
    return registerObj.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(formData);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = formData.password1.length >= 4;
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  const isPasswordSame = formData.password1 === formData.password2;
  // 이름이 2글자 이상인지 여부를 확인함.
  // const isNameValid = formData.name.length >= 2;

  const isEmailSame = async () => {
    
    // Api.get("user", formData.email).then((res) => setUser(res.data));
    try{
      const res = await Api.get("email",formData.email);
      alert(res.data.message)
    }catch{
      alert("이메일이 사용중입니다.")
    }
    
    
  };

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  const isFormValid =
    isEmailValid && isPasswordValid && isPasswordSame

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // "registration" 엔드포인트로 post요청함.
      await Api.post("registration/", formData);
      
      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      console.log("회원가입에 실패하였습니다.", err);
    }
  };

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: RegisterData) => {
      const newData = {
        ...prev,
        [name]: value,
      };

      return newData;
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <span>이메일 주소</span>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={formData.email}
            onChange={handleonChange}
          />
         <button onClick={isEmailSame}>중복확인</button>
          {!isEmailValid && (
            <div className="text-success">이메일 형식이 올바르지 않습니다.</div>
          )}
         
        </div>

        <div>
          <span>비밀번호</span>
          <input
            type="password"
            name="password1"
            autoComplete="off"
            value={formData.password1}
            onChange={handleonChange}
          />
          {!isPasswordValid && (
            <div className="text-success">
              비밀번호는 4글자 이상으로 설정해 주세요.
            </div>
          )}
        </div>

        <div>
          <span>비밀번호 재확인</span>
          <input
            type="password"
            name="password2"
            autoComplete="off"
            value={formData.password2}
            onChange={handleonChange}
          />
          {!isPasswordSame && (
            <div className="text-success">비밀번호가 일치하지 않습니다.</div>
          )}
        </div>

        {/* <div>
          <span>이름</span>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={formData.name}
            onChange={handleonChange}
          />
          {!isNameValid && (
            <div className="text-success">
              이름은 2글자 이상으로 설정해 주세요.
            </div>
          )}
        </div> */}

        <div>
          <button type="submit" disabled={!isFormValid}>
            회원가입
          </button>
        </div>

        <div>
          <button onClick={() => navigate("/login")}>로그인하기</button>
        </div>
      </form>
      
    </>
  );
}

export default RegisterForm;
