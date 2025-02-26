/* eslint-disable react/prop-types */
const Arrow = ({ color, flip }) => {
  const transform = flip === "true" ? {"transform": "rotateY(180deg)"} : {};
  return (
    <svg style={transform} width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.7071 8.70711C30.0976 8.31658 30.0976 7.68342 29.7071 7.29289L23.3431 0.928932C22.9526 0.538408 22.3195 0.538408 21.9289 0.928932C21.5384 1.31946 21.5384 1.95262 21.9289 2.34315L27.5858 8L21.9289 13.6569C21.5384 14.0474 21.5384 14.6805 21.9289 15.0711C22.3195 15.4616 22.9526 15.4616 23.3431 15.0711L29.7071 8.70711ZM0 9H29V7H0V9Z" fill={color}/>
    </svg>
  );
};
export default Arrow;