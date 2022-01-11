import React, {useState, useEffect} from 'react'
import classes from './gallery.module.scss'
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';

function Gallerpage() {
    const [images, setImages] = useState([]);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    useEffect(() => {
        async function fetchImages() {
            const { data } = await axios.get(`/api/gallerys`)
            setImages(data);
        }
        fetchImages();   
    }, [])

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Gallery</h2>
            <div className={model ? classes.model__open : classes.model}>
                <img src={tempimgSrc} />
                <AiOutlineClose onClick={() => setModel(false)} />
            </div>
            <div className={classes.gallery}>
                {
                    images.map(el => (
                        <div key={el._id} className={classes.pics}>
                            <img src={`${el.image}`} onClick={() => getImg(el.image)} alt={`${el.name}`}/>
                        </div>    
                    ))
                }
            </div>
        </div>
    )
}

export default Gallerpage
