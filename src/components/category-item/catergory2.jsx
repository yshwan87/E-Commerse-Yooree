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
    <div id="category-container">
      <div className="category">
        <div className="category-img">
          <img src={Cake} alt="Category 1" />
        </div>
        <div className="category-info">
          <h3>Category 1</h3>
          <p>Description for category 1</p>
          <button>
            <a href="category-1-page.html">Learn More</a>
          </button>
        </div>
      </div>
      <div className="category">
        <div className="category-info-2 order-0 order-md-1">
          <h3>Category 2</h3>
          <p>Description for category 2</p>
          <button>
            <a href="category-2-page.html">Learn More</a>
          </button>
        </div>

        <img src={Flower} alt="Category 2" />
      </div>
      <div className="category">
        <img src={Platter} alt="Category 3" />
        <div className="category-info">
          <h3>Category 3</h3>
          <p>Description for category 3</p>
          <button>
            <a href="category-3-page.html">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catergory2;
