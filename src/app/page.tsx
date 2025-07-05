import MainTitle from '@/components/home/MainTitle';
import Title from '@/components/home/Title';
import ImageText from '@/components/ImageText';
import TitleText from '@/components/TitleText';

export default function HomePage() {
  return (
    <>
      <Title>Bienvenue sur le portfolio de</Title>
      <MainTitle>MAXIME STEPKOWSKI</MainTitle>
      <ImageText imageSrc="${config.basePath}/photos/moi.jpg" altText="Image">
        <h1 className="text-3xl font-bold text-white mb-4">Qui suis-je brievement ?</h1>
        <p className="text-white">
          Actuellement en deuxième année de Bachelor Universitaire de Technologie (BUT) en Informatique à l'université Sorbonne Paris Nord à Villetaneuse, mon objectif est de poursuivre mes études dans une école d'ingénieur spécialisée en cybersécurité pour approfondir mes connaissances et compétences dans ce domaine.
        </p>
      </ImageText>

      <section className="mt-12 space-y-8 flex flex-col items-center pb-8">
        <TitleText title="À propos">
          Découvrez mon parcours, mes compétences, mes centres d'intérêt et ce qui me motive dans le domaine de l'informatique et de la cybersécurité.
        </TitleText>
        <TitleText title="Projets">
          Retrouvez ici une sélection de mes projets réalisés durant mes études ou à titre personnel, avec des explications sur les technologies utilisées et les objectifs atteints.
        </TitleText>
        <TitleText title="Contact">
          Vous souhaitez me contacter pour un projet, une collaboration ou simplement échanger ? Retrouvez ici toutes les informations pour me joindre facilement.
        </TitleText>
      </section>
    </>
  );
}