import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api/api";
import * as R from "./Register.styled";

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
  const isPasswordValid = formData.password1.length >= 8;
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  const isPasswordSame = formData.password1 === formData.password2;
  // 이름이 2글자 이상인지 여부를 확인함.
  // const isNameValid = formData.name.length >= 2;

  const isEmailSame = async () => {
    // Api.get("user", formData.email).then((res) => setUser(res.data));
    try {
      const res = await Api.get("email", formData.email);
      alert("사용할 수 있는 이메일입니다.");
    } catch {
      alert("이미 사용된 이메일입니다.");
    }
  };

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  const isFormValid = isEmailValid && isPasswordValid && isPasswordSame;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // "registration" 엔드포인트로 post요청함.
      await Api.post("registration/", formData);
      alert(
        "가입하신 이메일로 인증메일을 보냈습니다.\n인증해주시면 가입이 완료됩니다."
      );
      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      alert("비밀번호는 너무 일상적인 단어나 숫자로만 되어있으면 안됩니다.");
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
      <R.WholeLayout>
        <R.Wrapper>
          <R.RegisterTitle>회원가입</R.RegisterTitle>
          <R.SameBox onClick={isEmailSame} disabled={!isEmailValid}>중복확인</R.SameBox>
        </R.Wrapper>
        <R.LayoutForm onSubmit={handleSubmit}>
          <R.Position>
            <R.RegisterBox
              type="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleonChange}
              placeholder="이메일 입력"
            ></R.RegisterBox>

            {!isEmailValid && formData.email && (
              <div className="text-success" style={{textAlign:"center"}}>
                이메일 형식이 올바르지 않습니다.
              </div>
            )}
          </R.Position>

          <R.Position>
            <R.PasswordBox
              type="password"
              name="password1"
              autoComplete="off"
              value={formData.password1}
              onChange={handleonChange}
              placeholder="비밀번호 입력"
            />
            {!isPasswordValid && formData.password1 && (
              <div className="text-success" style={{textAlign:"center"}}>
                비밀번호는 8글자 이상으로 설정해 주세요.
              </div>
            )}
          </R.Position>

          <R.Position>
            <R.PasswordBox
              type="password"
              name="password2"
              autoComplete="off"
              value={formData.password2}
              onChange={handleonChange}
              placeholder="비밀번호 확인"
            />
            {!isPasswordSame && (
              <div className="text-success" style={{textAlign:"center"}}>비밀번호가 일치하지 않습니다.</div>
            )}
          </R.Position>


          <div>
            <R.RegisterButton type="submit" disabled={!isFormValid}>
              회원가입
            </R.RegisterButton>
          </div>

          <div>
            <R.LoginButton onClick={() => navigate("/login")}>
              로그인하기
            </R.LoginButton>
          </div>
        </R.LayoutForm>
      </R.WholeLayout>
    </>
  );
}

export default RegisterForm;
