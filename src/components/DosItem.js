import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  text-align: center;
  .doesItem__icon {
    svg {
      width: 4rem;
    }
  }
  .doesItem__title {
    font-size: 2.5rem;
    font-family: "Montserrat SemiBold";
  }
  .para {
    margin-top: 2rem;
  }
  .doesItem {
    margin: auto;
    min-height: 220px;
    width: 320px;
    background-color: var(--deep-dark);
    padding: 3rem;
    box-shadow: 12px 9px 42px -6px rgba(0, 0, 0, 1);
  }
`;

export default function WhatIdoItem({
  icon = <MdDesktopMac />,
  title = "Web Developer",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles>
      <div className="doesItem" data-aos="zoom-out" data-aos-delay="200" data-aos-once>
        <div className="doesItem__icon">{icon}</div>
        <div className="doesItem__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ItemStyles>
  );
}
