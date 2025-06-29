import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .doesItem__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(139, 92, 246, 0.1));
    border-radius: 12px;
    margin: 0 auto 2rem auto;
    transition: all 0.3s ease;

    svg {
      width: 3rem;
      height: 3rem;
      color: var(--accent-color);
      transition: transform 0.3s ease;
    }
  }

  .doesItem__title {
    font-size: 2.2rem;
    font-family: "Montserrat SemiBold", sans-serif;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }

  .doesItem__desc {
    font-size: 1.6rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  .doesItem {
    margin: auto;
    min-height: 280px;
    width: 320px;
    background: var(--secondary-bg);
    padding: 3rem 2.5rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      box-shadow: var(--shadow-lg);
      border-color: var(--border-hover);
      transform: translateY(-4px);

      &::before {
        opacity: 1;
      }

      .doesItem__icon {
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(139, 92, 246, 0.15));
        transform: scale(1.05);

        svg {
          transform: scale(1.1);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .doesItem {
      width: 100%;
      max-width: 320px;
      min-height: 260px;
      padding: 2.5rem 2rem;
    }

    .doesItem__title {
      font-size: 2rem;
    }

    .doesItem__desc {
      font-size: 1.5rem;
    }

    .doesItem__icon {
      width: 5.5rem;
      height: 5.5rem;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .doesItem {
      padding: 2rem 1.5rem;
      min-height: 240px;
    }

    .doesItem__title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .doesItem__desc {
      font-size: 1.4rem;
    }
  }
`;

export default function WhatIdoItem({
  icon = <MdDesktopMac />,
  title = "Web Developer",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
}) {
  return (
    <ItemStyles>
      <div className="doesItem">
        <div className="doesItem__icon">{icon}</div>
        <h3 className="doesItem__title">{title}</h3>
        <p className="doesItem__desc">{desc}</p>
      </div>
    </ItemStyles>
  );
}
