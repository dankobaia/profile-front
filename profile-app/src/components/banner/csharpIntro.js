import React from "react";

import { CSharpText, ColorSpan, MarginLeft } from "./styles";

export default function banner(props) {
  return (
    <>
      <h1 className="mb-3">{"//Desenvolvimento .Net"}</h1>

      <CSharpText>
        <ColorSpan color={"#007ACC"}>public string </ColorSpan>
        <ColorSpan color={"rgb(220,220,170)"}>About</ColorSpan>()
        <br />
        {"{"}
        <br />
        <MarginLeft />
        <ColorSpan color={"rgb(255,121,255)"}>return </ColorSpan>
        <ColorSpan color={"rgb(214,157,133)"}>
          "Desenvolvimento de APIs, aplicações desktops e web e aplicativos
          Hibridos.\n"
          <ColorSpan color={"rgb(220,220,220)"}> +</ColorSpan>
          <br />
          <MarginLeft space="12vh" />
          "Experiencia com integrações, crawlers e microserviços."
        </ColorSpan>
        <br />
        {"}"}
      </CSharpText>
    </>
  );
}
