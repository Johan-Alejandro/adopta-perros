import Tags from "./Tags";
const MyCard = ({ img, nombre, descripcion, tagText, tagColor }) => {
  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <Tags text={tagText} bgColor={tagColor} />
        </div>
      </div>
    </>
  );
};
export default MyCard;
