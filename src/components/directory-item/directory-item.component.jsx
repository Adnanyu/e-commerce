import './directory-item.style.scss'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) =>{
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
  
    const {imageUrl , title, route} = category;
    return(
        <div className="directory-container" onClick={onNavigateHandler}>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className="body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}
export default DirectoryItem
