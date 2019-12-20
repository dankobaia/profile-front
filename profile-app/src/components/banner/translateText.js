import React, { useState } from "react";

export default function(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </>
  );
}
