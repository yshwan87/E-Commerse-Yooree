import Directory from '../../components/directory/directory.component';

const Home = () => {
    const categories = [
        {
          id: 1,
          title: 'Cakes With Flower',
          img: ''
        },
        {
          id: 2,
          title: 'Unique Flower',
          img: ''
        },
        {
          id: 3,
          title: 'Charcuterie',
          img: ''
        }
      ]
    
      return <Directory categories={categories} />;
};

export default Home;