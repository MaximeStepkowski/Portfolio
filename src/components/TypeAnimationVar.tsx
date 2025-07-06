"use client";
import { TypeAnimation } from 'react-type-animation';

/**
 * Composant de texte animé réutilisable avec 'react-type-animation'.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<string | number>} props.sequence - La séquence de chaînes de caractères et de délais pour l'animation.
 * @returns {JSX.Element} Un élément TypeAnimation configuré.
 */
const DynamicTypeAnimation = ({ sequence }: { sequence: (string | number)[] }) => {
  if (!sequence || !Array.isArray(sequence) || sequence.length === 0) {
    console.warn("DynamicTypeAnimation requires a 'sequence' prop which must be a non-empty array.");
    return null; // Ou vous pouvez retourner un fallback, par exemple <span></span>
  }

  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={sequence}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      className="text-4xl font-bold text-center text-white mb-6 pt-8"
      repeat={Infinity}
    />
  );
};

export default DynamicTypeAnimation;