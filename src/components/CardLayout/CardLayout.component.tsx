import React from "react";
import "./CardLayout.styles.scss";
import Card from "./../Card/Card.component";
// @ts-ignore
function CardView({ data }) {
  return (
    <div className="cardLayout_container">
      <div className="cardLayout">
        {
          // @ts-ignore
          data.map(({ char_id, ...otherProps }) => {
            // @ts-ignore
            return <Card key={char_id} {...otherProps} />;
          })
        }
      </div>
    </div>
  );
}

export default CardView;
