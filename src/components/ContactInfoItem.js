import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--secondary-bg);
    border-color: var(--border-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  .icon {
    color: var(--accent-color);
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    flex-shrink: 0;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  .info {
    flex: 1;
  }

  .info__label {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.4rem;
  }

  .info__text {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.4;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }

    .icon {
      padding: 1rem;
    }

    .info__text {
      font-size: 1.4rem;
    }
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "Contact information",
  label,
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        {label && <div className="info__label">{label}</div>}
        <div className="info__text">{text}</div>
      </div>
    </ItemStyles>
  );
}
