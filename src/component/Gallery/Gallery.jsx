import style from '../Gallery/Gallery.module.scss'
import {Employee} from '../Employee/Employee'
export const Gallery = props =>{
    return(
        <>
       <div className={styles.gallerywrapper}></div>
       {props && props.imageList && props.imageList.map(item =>{ 
           return(
               <img key={item.id}src={item.image} alt={item.name} />
           )
       })}
        </>
    )
}