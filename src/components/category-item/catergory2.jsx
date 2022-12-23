import "./catergory2.scss";
import Cake from "../../assets/cakeFINAL.jpg";
import Flower from "../../assets/flower.jpg";
import Platter from "../../assets/platter.jpg";

const Catergory2 = () => {
  const categories = [
    {
      image: Cake,
      title: "Fashion",
      description: "290K Items",
    },
    {
      image: Flower,
      title: "Headphone",
      description: "3M Items",
    },
    {
      image: Platter,
      title: "Laptop",
      description: "1.2M Items",
    },
    {
      image: Platter,
      title: "Laptop",
      description: "1.2M Items",
    },
  ];

  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Categories</h2>
        </div>
        <div className="categories">
          {categories.map(({ image, title, description }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <button className="btn">Show All</button>
      </div>
    </div>
  );
};

export default Catergory2;
