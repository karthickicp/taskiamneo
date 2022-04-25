import { Droppable } from "react-beautiful-dnd";
import Column from "./column";
const Card = (props) => {
  const columns = props.columns;
  const ordered = props.ordered;
  const { containerHeight } = props;
  return (
    <Droppable
      style={{ marginTop: "55px" }}
      droppableId="board"
      type="COLUMN"
      direction="horizontal"
      ignoreContainerClipping={Boolean(containerHeight)}
      isCombineEnabled={props.isCombineEnabled}
    >
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {ordered.map((key, index) => (
            <Column
              key={key}
              index={index}
              title={key}
              candidates={columns[key]}
              isCombineEnabled={props.isCombineEnabled}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default Card;
