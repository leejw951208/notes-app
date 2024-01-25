import styled from "styled-components";
import Item from "./Item";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../../store/board-slice";
import SearchSection from "../../search/Search";
import { useEffect, useState } from "react";

const ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 320px;
  overflow-y: overlay;
  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #8e8e8e;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const List = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.board);
  const { keyword, sort } = useSelector((state) => state.search);

  const [searchNotes, setSearchNotes] = useState([...notes]);

  useEffect(() => {
    if (keyword) {
      setSearchNotes((prev) => {
        return prev.filter((note) => note.title.indexOf(keyword) === 0);
      });
    } else {
      setSearchNotes([...notes]);
    }
    if (sort) {
      if (sort === "modified") {
        setSearchNotes((prev) => {
          return prev.sort(
            (a, b) => new Date(b.modifiedDate) - new Date(a.modifiedDate)
          );
        });
      } else if (sort === "created") {
        setSearchNotes((prev) => {
          return prev.sort(
            (a, b) => new Date(b.createdDate) - new Date(a.createdDate ? -1 : 1)
          );
        });
      } else {
        setSearchNotes((prev) => {
          return prev.sort((a, b) => (b.title > a.title ? -1 : 1));
        });
      }
    }
  }, [keyword, sort]);

  const handleAddBoard = () => {
    dispatch(boardActions.setEditId(""));
    dispatch(boardActions.setWrite(true));
  };

  const handleItemClick = (id) => {
    dispatch(boardActions.setEditId(id));
    dispatch(boardActions.setWrite(true));
  };

  return (
    <>
      <SearchSection />
      <ItemSection>
        {searchNotes.length === 0 && <p>No result</p>}
        {searchNotes &&
          searchNotes.map((note) => (
            <Item
              key={note.id}
              title={note.title}
              content={note.content}
              onClick={() => handleItemClick(note.id)}
            />
          ))}
      </ItemSection>
      <ButtonSection>
        <Button
          backGroundColor="#2C61F0"
          hoverBackGroundColor="#1448D3"
          color="white"
          name="Create Note"
          onClick={handleAddBoard}
        />
      </ButtonSection>
    </>
  );
};

export default List;
