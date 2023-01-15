import React from 'react'
import Collectionitem from '../collection item/Collectionitem'
import './collectionpreview.scss'

const Collectionpreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((ele, id) => id < 4).map((item) => (
                        <Collectionitem key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Collectionpreview