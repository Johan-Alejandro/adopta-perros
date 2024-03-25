const Tags = ({ text, bgColor }) => {
  return (
    <>
      <span className={`badge bg-${bgColor}`}>{text}</span>
    </>
  );
};
export default Tags;
