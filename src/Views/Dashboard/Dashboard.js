import React, { useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import Column from "../Components/column";

import reorder, { reorderQuoteMap } from "../Components/reorder";
const Dashboard = ({ initial, search }) => {
  const [state, setState] = useState({
    columns: initial,
    ordered: Object.keys(initial),
  });
  const onDragEnd = (result) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...state.ordered];
        shallow.splice(result.source.index, 1);
        setState({ ...state, ordered: shallow });
        return;
      }
      const column = state.columns[result.source.droppableId];
      const withQuoteRemoved = [...column];
      withQuoteRemoved.splice(result.source.index, 1);
      const updatedColumns = {
        ...state.columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      setState({ ...state, updatedColumns });
      return;
    }
    // dropped nowhere
    if (!result.destination) {
      return;
    }
    const source = result.source;
    const destination = result.destination;
    // did not move anywhere
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    // reordering column
    if (result.type === "COLUMN") {
      const ordered = reorder(state.ordered, source.index, destination.index);
      setState({ ...state, ordered });
      return;
    }
    const data = reorderQuoteMap({
      quoteMap: state.columns,
      source,
      destination,
    });
    setState({ ...state, columns: data.quoteMap });
  };

  return (
    <React.Fragment>
      <div className="report-section">
        <DragDropContext onDragEnd={onDragEnd}>
          <Board state={state} search={search} />
        </DragDropContext>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
const Board = ({ state, search }) => {
  const newColumns = state.columns;
  const ordered = state.ordered;

  return (
    <Droppable
      style={{ display: "flex", width: "100%" }}
      className="board"
      droppableId="board"
      type="COLUMN"
      direction="horizontal"
      isCombineEnabled={false}
      // search={search}
    >
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {ordered.map((key, index) => {
            return (
              <Column
                key={key}
                index={index}
                title={key}
                candidates={newColumns[key]}
                isCombineEnabled={false}
                search={search}
              />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
