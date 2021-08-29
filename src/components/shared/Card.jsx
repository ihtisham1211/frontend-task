import React from "react";
import { CardContainer, CustomCheckbox } from "./styledComponents";

export default function Card({ id, name, del, handleDeleteIds }) {
  return (
    <CardContainer key={id}>
      <h2>{name}</h2>
      {del && (
        <CustomCheckbox
          type="checkbox"
          onChange={() => {
            handleDeleteIds(id);
          }}
        />
      )}
    </CardContainer>
  );
}
