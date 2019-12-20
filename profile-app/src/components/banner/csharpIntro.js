import React from "react";

import { CSharpText, ColorSpan, MarginLeft } from "./styles";

export default function banner(props) {
  return (
    <>
      <h1 className="mb-3">//Desenvolvedor .Net</h1>

      <CSharpText>
        <ColorSpan color={"#007ACC"}>public string </ColorSpan>
        <ColorSpan color={"rgb(220,220,170)"}>About</ColorSpan>()
        <br />
        {"{"}
        <br />
        <MarginLeft />
        <ColorSpan color={"rgb(255,121,255)"}>return </ColorSpan>
        <ColorSpan color={"rgb(214,157,133)"}>
          "Iniciei minha carreira trabalhando com C# \n"
          <ColorSpan color={"rgb(220,220,220)"}> +</ColorSpan>
          <br />
          <MarginLeft />
          <MarginLeft />
          Experiencia com Frontend, Backend em ambientes .Net"
        </ColorSpan>
        <br />
        {"}"}
      </CSharpText>
    </>
  );
}
