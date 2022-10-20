export const REST_API_KEY = "9901ca27a0f11eb036ff645bf90c0204";
export const REDIRECT_URI =  "http://localhost:3000/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;