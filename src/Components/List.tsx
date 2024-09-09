import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DroppableProvided } from 'react-beautiful-dnd';
import './List.css';

interface List {
    title: string;
    cards: string[];
}

const List: React.FC = () => {
    const [lists, setLists] = useState<List[]>([
        { title: 'To do', cards: ['Project Description 1'] },
        { title: 'In Progress', cards: ['Project Description 2'] },
        { title: 'Done', cards: ['Project Description 3'] },
    ]);
    const [newListTitle, setNewListTitle] = useState<string>('');
    const [newCardText, setNewCardText] = useState<string>('');
    const [selectedListIndex, setSelectedListIndex] = useState<number | null>(null);

    const handleAddList = () => {
        if (newListTitle.trim() !== '') {
            setLists([...lists, { title: newListTitle, cards: [] }]);
            setNewListTitle('');
        }
    };

    const handleAddCard = () => {
        if (selectedListIndex !== null && newCardText.trim() !== '') {
            const updatedLists = lists.map((list, index) => {
                if (index === selectedListIndex) {
                    return { ...list, cards: [...list.cards, newCardText] };
                }
                return list;
            });
            setLists(updatedLists);
            setNewCardText('');
        }
    };

    const handleListTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewListTitle(e.target.value);
    };

    const handleCardTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewCardText(e.target.value);
    };

    const handleAddCardClick = (index: number) => (e: MouseEvent<HTMLButtonElement>) => {
        setSelectedListIndex(index);
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) return;

        const sourceListIndex = parseInt(source.droppableId, 10);
        const destinationListIndex = parseInt(destination.droppableId, 10);
        const sourceCardIndex = source.index;
        const destinationCardIndex = destination.index;

        // Reorder cards within the same list
        if (sourceListIndex === destinationListIndex) {
            const updatedLists = [...lists];
            const [movedCard] = updatedLists[sourceListIndex].cards.splice(sourceCardIndex, 1);
            updatedLists[sourceListIndex].cards.splice(destinationCardIndex, 0, movedCard);
            setLists(updatedLists);
        } else {
            // Move card to a different list
            const updatedLists = [...lists];
            const [movedCard] = updatedLists[sourceListIndex].cards.splice(sourceCardIndex, 1);
            updatedLists[destinationListIndex].cards.splice(destinationCardIndex, 0, movedCard);
            setLists(updatedLists);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" direction="horizontal">
                {(provided: DroppableProvided) => (
                    <div
                        className="board"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {lists.map((list, listIndex) => (
                            <Droppable key={listIndex} droppableId={String(listIndex)}>
                                {(provided: DroppableProvided) => (
                                    <div
                                        className="list"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <h3>{list.title}</h3>
                                        {list.cards.map((card, cardIndex) => (
                                            <Draggable
                                                key={cardIndex}
                                                draggableId={`${listIndex}-${cardIndex}`}
                                                index={cardIndex}
                                            >
                                                {(provided: DraggableProvided) => (
                                                    <div
                                                        className="card"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {card}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                        <button
                                            className="add-card"
                                            onClick={handleAddCardClick(listIndex)}
                                        >
                                            + Add a card
                                        </button>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                        <div className="add-list-container">
                            <input
                                type="text"
                                placeholder="Enter list title"
                                value={newListTitle}
                                onChange={handleListTitleChange}
                            />
                            <button onClick={handleAddList}>+ Add a list</button>
                        </div>
                        {selectedListIndex !== null && (
                            <div className="add-card-container">
                                <input
                                    type="text"
                                    placeholder="Enter card description"
                                    value={newCardText}
                                    onChange={handleCardTextChange}
                                />
                                <button onClick={handleAddCard}>Add Card</button>
                            </div>
                        )}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default List;
