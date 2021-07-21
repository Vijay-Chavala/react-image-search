import React from "react";

const Gallery = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => {
        const { id, farm, server, secret, title } = image;
        return (
          <div className="img-container" key={id}>
            <div className="col-md-4">
              <img
                src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
                alt={title}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
