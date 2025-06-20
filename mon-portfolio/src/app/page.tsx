import MainTitle from '@/components/home/MainTitle';
import Title from '@/components/home/Title';
import ImageText from '@/components/ImageText';

export default function HomePage() {
  return (
    <>
      <Title>Bienvenue sur le portfolio de</Title>
      <MainTitle>MAXIME STEPKOWSKI</MainTitle>
      <ImageText imageSrc="/photos/moi.jpg" altText="Image">
        <h1 className="text-3xl font-bold text-white mb-4">Qui suis-je brievement ?</h1>
        <p className="text-white">Actuellement en deuxième année de Bachelor Universitaire de Technologie (BUT) en Informatique à l'université Sorbonne Paris Nord à Villetaneuse, mon objectif est de poursuivre mes études dans une école d'ingénieur spécialisée en cybersécurité pour approfondir mes connaissances et compétences dans ce domaine.</p>
      </ImageText>
    </>
  );
}