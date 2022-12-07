import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { img, title } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
        //   backgroundImage: `url(${img})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;