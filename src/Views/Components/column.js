import { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Task from "./task";
const Column = (props) => {
  const title = props.title;
  const candidateList = props.candidates;
  const search = props.search;
  const [candidates, setCandidates] = useState(props.candidates);
  useEffect(() => {
    setCandidates(candidateList);
    if (search) {
      let newCandidate = candidates.filter((candidate) =>
        candidate.Name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(newCandidate);
      setCandidates(newCandidate);
    } else {
      setCandidates(candidateList);
    }
  }, [candidateList, search]);

  const index = props.index;
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <div
          className="column-container"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="header" isdragging={snapshot.isdragging}>
            <h1 isdragging={snapshot.isdragging} {...provided.dragHandleProps}>
              {title} - {props.candidates.length}
            </h1>
          </div>
          <Task
            listId={title}
            candidates={candidates}
            isCombineEnabled={Boolean(props.isCombineEnabled)}
          />
        </div>
      )}
    </Draggable>
  );
};
export default Column;
