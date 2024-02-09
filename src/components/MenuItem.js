import React from 'react';

const MenuItem = ({ title, description, imageName, price }) => {
    const imageUrl = process.env.PUBLIC_URL + `/images/${imageName}`;

    return (
        <div className="d-flex menu-item my-3">
            <div className="flex-shrink-0">
                <img src={imageUrl} className="menu-item-image" alt={title} />
            </div>
            <div className="flex-grow-1 ms-3">
                <h5 className="mt-0">{title}</h5>
                <p>{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="price">${price}</span>
                    <button className="btn add-button">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
