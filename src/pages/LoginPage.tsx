import { useForm } from "react-hook-form";

/**
 * 기능
 * 1. 로그인 버튼을 연속 해서 누를 수 없게 컨트롤
 * 2.
 *
 */

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitted, isSubmitting, errors },
  } = useForm();

  const fncSubmit = async (data, e) => {
    await new Promise((r) => setTimeout(r, 1_000));
    console.log(data, e);
  };

  const fncOnError = async (data, e) => {
    await new Promise((r) => setTimeout(r, 1_000));
    //alert(JSON.stringify(data));
    console.log(data, e);
  };
  return (
    <form onSubmit={handleSubmit(fncSubmit, fncOnError)}>
      <label htmlFor="email">아이디</label>
      <input
        id="ID"
        type="ID"
        placeholder="ID"
        aria-invalid={isSubmitted ? (errors.ID ? "true" : "false") : undefined}
        {...register("ID", {
          required: "이메일은 필수 입력입니다.",
          // pattern: {
          //   value: /\S+@\S+\.\S+/,
          //   message: "이메일 형식에 맞지 않습니다.",
          // },
        })}
      />
      {/* TS조심 */}
      {errors.ID && <p>{errors.ID?.message?.toString()}</p>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        aria-invalid={
          isSubmitted ? (errors.password ? "true" : "false") : undefined
        }
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
          },
        })}
      />
      {errors.password && (
        <small role="alert">{errors.password.message.toString()}</small>
      )}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default LoginPage;
