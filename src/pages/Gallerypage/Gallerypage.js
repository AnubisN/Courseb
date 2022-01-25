import React, {useState, useEffect} from 'react'
import classes from './gallery.module.scss'
import { AiOutlineClose } from "react-icons/ai";
import { listGallerys } from '../../actions/galleryActions';
import { useDispatch, useSelector } from 'react-redux'

function Gallerypage() {
    const galleryList = useSelector(state => state.galleryList)
    const { error, loading, gallery} = galleryList 
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(listGallerys())
    }, [dispatch])

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        {
             loading ? <h2>Loading...</h2>
             : error ? <h3>{error}</h3>
             : <div className={classes.container}>
                    <div className={model ? classes.model__open : classes.model}>
                        <img src={tempimgSrc} />
                        <AiOutlineClose onClick={() => setModel(false)} />
                    </div>
                    <div className={classes.gallery}>
                        {
                            gallery.map(el => (
                                <div key={el.id} className={classes.pics}>
                                    <img src={`${el.image}`} onClick={() => getImg(el.image)} alt={`${el.name}`}/>
                                </div>    
                            ))
                        }
                    </div>
                </div>
        }
        </>
    )
}

export default Gallerypage
