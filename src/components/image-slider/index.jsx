import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";



export default function ImageSlider({url, limit}){

    const [images, setImages] = useState([]);
    const [currSlide, setCurrSlide] = useState(0);


    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    return (
        <div>

        </div>
    );
}