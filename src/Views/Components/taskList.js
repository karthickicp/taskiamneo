import React, { useState } from "react";
import StarRatings from "react-star-ratings/build/star-ratings";

const TaskList = (props) => {
  const { candidate, isdragging, isgroupedover, provided } = props;
  const [rating, setRating] = useState(0);
  const changeRating = (val) => {
    setRating(val);
  };
  return (
    <div
      className="taskList-container"
      isdragging={isdragging}
      isgroupedover={isgroupedover}
      colors={candidate.column.colors}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="Content">
        <div className="top-body">
          <p>{candidate.Name}</p>
          <i
            style={{ marginLeft: "5px", color: "red", marginTop: "5px" }}
            className="fa-solid fa-user-group"
          ></i>
        </div>
        <div>
          <p className="desc">{candidate.Company}</p>
        </div>
      </div>
      <div className="bottom-body">
        <StarRatings
          rating={rating}
          starRatedColor="yellow"
          changeRating={(val) => changeRating(val)}
          numberOfStars={5}
          starDimension="22px"
          starSpacing="2px"
          name="rating"
        />
      </div>
    </div>
  );
};
export default TaskList;
