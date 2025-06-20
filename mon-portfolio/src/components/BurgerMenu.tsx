'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInRight, fadeOutRight } from 'react-animations';

const fadeIn = keyframes`${fadeInRight}`;
const fadeOut = keyframes`${fadeOutRight}`;

const Menu = styled.div<{ isClosing: boolean }>`
  background-color: rgba(102, 7, 190, 0.95);
  position: fixed;
  top: 60px;
  right: 0;
  width: 300px;
  padding: 2rem;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 0 12px;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-name: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)};
  z-index: 50;
`;

const Button = styled.button`
  position: fixed;
  top: 4px;
  right: 1rem;
  z-index: 100;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
`;

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
  };

  return (
    <>
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} aria-label="Ouvrir le menu">
          ☰
        </Button>
      )}

      {isOpen && (
        <>
          <Button onClick={handleClose} aria-label="Fermer le menu">
            ✕
          </Button>
          <Menu isClosing={isClosing}>
            <a href="/" className="block mb-4 text-xl text-white font-semibold">Accueil</a>
            <a href="/about" className="block mb-4 text-xl text-white font-semibold">À propos</a>
            <a href="/projects" className="block mb-4 text-xl text-white font-semibold">Projets</a>
            <a href="/contact" className="block text-xl text-white font-semibold">Contact</a>
          </Menu>
        </>
      )}
    </>
  );
}
