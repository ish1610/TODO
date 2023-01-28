// 토큰 남은 만료 시간 계산
export const calculateRemainingTime = (expirationTime: string): number => {
  const currentTime = new Date().getTime();

  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  if (storedExpirationTime) {
    const remainingTime = calculateRemainingTime(storedExpirationTime);

    // 토큰이 유통기한 1분 미만일 경우 로컬스토리지에 저당된 데이터 삭제
    if (remainingTime <= 3600) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      return null;
    }
    // 토큰의 유통기한이 남아 있다면 저장된 토큰과 남은 유효 시간 리턴
    return {
      token: storedToken,
      duration: remainingTime,
    };
  }
};
