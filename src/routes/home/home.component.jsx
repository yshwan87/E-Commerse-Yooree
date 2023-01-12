import Directory from "../../components/directory/directory.component";
import Cake from "../../assets/cakeFINAL.jpg";
import Flower from "../../assets/flower.jpg";
import Platter from "../../assets/platter.jpg";
import "./home.styles.scss";
import HeroSection from "../../components/heroSection/heroSection";
import Footer from "../../components/footer/footer";
import Catergory2 from "../../components/category-item/catergory2";
import InfoSection from "../../components/category-item/InfoSection";
import { CakeData, FlowerData, PlatterData } from "../../data/InfoData";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Cake",
      title: "Cakes With Flower",
      img: { Cake },
    },
    {
      id: 2,
      name: "Flower",
      title: "Unique Flower",
      img: { Flower },
    },
    {
      id: 3,
      name: "Platter",
      title: "Charcuterie",
      img: { Platter },
    },
  ];

  return (
    <>
      <HeroSection />
      {/* <Catergory2/> */}
      <InfoSection {...CakeData}/>
      <InfoSection {...FlowerData}/>
      <InfoSection {...PlatterData}/>
      <Directory categories={categories} />
      <Footer />
    </>
  );
};

export default Home;
