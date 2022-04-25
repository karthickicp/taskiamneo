import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskList from "./taskList";

const InnerQuoteList = (props) => {
  return props.candidates.map((candidate, index) => (
    <Draggable key={candidate.id} draggableId={candidate.id} index={index} shouldRespectForceTouch={false}>
      {(dragProvided, dragSnapshot) => (
        <TaskList key={candidate.id} candidate={candidate} isdragging={dragSnapshot.isdragging} isGroupedOver={Boolean(dragSnapshot.combineTargetFor)} provided={dragProvided} />
      )}
    </Draggable>
  ));
};

const InnerList = (props) => {
  const { candidates, dropProvided } = props;
  return (
    <div>
      <div className="drop-zone" ref={dropProvided.innerRef}>
        <InnerQuoteList candidates={candidates} />
        {dropProvided.placeholder}
      </div>
    </div>
  );
};

const Task = (props) => {
  const { ignoreContainerClipping, isdropdisabled, isCombineEnabled, listId, listType, style, candidates, title, } = props;

  return (
    <Droppable droppableId={listId} type={listType} ignoreContainerClipping={ignoreContainerClipping} isdropdisabled={isdropdisabled} isCombineEnabled={isCombineEnabled}>
      {(dropProvided, dropSnapshot) => (
        <div
          className="task-wrapper"
          style={style}
          isgroupedover={dropSnapshot.isdraggingover}
          isdropdisabled={isdropdisabled}
          isdraggingfrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
        >
          <InnerList
            candidates={candidates}
            title={title}
            dropProvided={dropProvided}
          />
        </div>
      )}
    </Droppable>
  );
};
export default Task;
