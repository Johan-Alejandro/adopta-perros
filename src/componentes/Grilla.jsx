import MyCard from "./MyCard";
import imagen1 from "../assets/img/dog-1.jpg";
import imagen2 from "../assets/img/dog-2.jpg";
import imagen3 from "../assets/img/dog-3.jpg";
import imagen4 from "../assets/img/dog-4.jpg";
const Grilla = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <MyCard
              img={imagen1}
              nombre="Sasuke"
              descripcion="¡Hola soy Sasuke! Soy jugueton y cariñoso, llevame contigo!"
              tagText="Corgi"
              tagColor="success"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <MyCard
              img={imagen2}
              nombre="Kroos"
              descripcion="¡Hola! soy Kroos, un lindo Golden Retriever listo para ser tu fiel compañero."
              tagText="Golden Retriever"
              tagColor="primary"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <MyCard
              img={imagen3}
              nombre="Thor"
              descripcion="Thor! un perrito jugueton y muy cariñoso, con él sabrás lo que es el amor."
              tagText="Husky"
              tagColor="danger"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <MyCard
              img={imagen4}
              nombre="Sanji"
              descripcion="Un adorable Border Collie, listo para ir a tu casa y complementar tu vida."
              tagText="Border Collie"
              tagColor="warning"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Grilla;
