import MainTitle from '@/components/home/MainTitle';
import Title from '@/components/home/Title';
import ImageText from '@/components/ImageText';
import TitleText from '@/components/TitleText';
import Section from '@/components/Section';
import SectionParagraph from '@/components/SectionParagraph';
import SectionTitle from '@/components/SectionTitle';
import DynamicTypeAnimation from '@/components/TypeAnimationVar';

export default function HomePage() {
  const profileSequence = [
    'Je suis un étudiant français',
    1500,
    'Je suis un développeur passionné',
    1500,
    'Je suis un passionné d\'automobile',
    1500,
    'Je suis un amateur de jeux vidéo',
    1500
  ];


  return (
    <>
      <Title>Bienvenue sur le portfolio de</Title>
      <MainTitle>MAXIME STEPKOWSKI</MainTitle>
      <DynamicTypeAnimation sequence={profileSequence} />
      <ImageText imageSrc="/Portfolio/photos/moi.jpg" altText="Image">
        <h1 className="text-3xl font-bold text-white mb-4">Qui suis-je brievement ?</h1>
        <SectionParagraph>
          Actuellement en deuxième année de Bachelor Universitaire de Technologie (BUT) en Informatique à l'université Sorbonne Paris Nord à Villetaneuse, mon objectif est de poursuivre mes études dans une école d'ingénieur spécialisée en cybersécurité pour approfondir mes connaissances et compétences dans ce domaine.
        </SectionParagraph>
      </ImageText>

      <SectionTitle>Différentes pages de ce site</SectionTitle>
      <Section>
        <SectionTitle>À propos</SectionTitle>
        <SectionParagraph>
          Découvrez mon parcours, mes compétences, mes centres d'intérêt et ce qui me motive dans le domaine de l'informatique et de la cybersécurité.
        </SectionParagraph>
        <SectionTitle>Projets</SectionTitle>
        
        <SectionParagraph>
          Retrouvez ici une sélection de mes projets réalisés durant mes études ou à titre personnel, avec des explications sur les technologies utilisées et les objectifs atteints.
        </SectionParagraph>
        <SectionTitle>Contact</SectionTitle>
        <SectionParagraph>
          Vous souhaitez me contacter pour un projet, une collaboration ou simplement échanger ? Retrouvez ici toutes les informations pour me joindre facilement.
        </SectionParagraph>
      </Section>
    </>
  );
}