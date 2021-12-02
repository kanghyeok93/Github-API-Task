// 값이 비어있는지 확인하는 함수
export const isEmpty = data => {
  return (
    typeof data === 'undefined' ||
    data === null ||
    data === '' ||
    data === 'NaN'
  );
};
