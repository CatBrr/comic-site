import React from 'react';
import Badge from 'react-bootstrap/Badge';

const ImageList = ({recent_comics}) => {
    return (
            <div className='d-flex flex-wrap justify-content-center'>
            {
                Array.from(recent_comics).map((comic,comicindex)=>{
                    return(
                        <div className='m-1 image-div'>
                            <div className='content-tab-img' style={{background: 'url('+comic.cover+')'}}></div>
                            <h4>{comic.title}</h4>
                            {
                                Array.from(comic.tags).map((tag,index) =>{
                                    return <Badge id={'tag-'+index+'-img-'+comicindex}>{tag}</Badge>
                                })
                            }
                            <div>{comic.desc}</div>
                        </div>
                    )
                })
            }
            </div>
    );
};

export default ImageList;