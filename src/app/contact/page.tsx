import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import SectionParagraph from '@/components/SectionParagraph';
import ContactInfoBox from '@/components/contact/ContactInfoBox';
import SocialLinks from '@/components/contact/SocialLinks';

export default function ContactPage() {
  const myEmail = "stepkowskimaxime@gmail.com";
  const myLinkedIn = "https://fr.linkedin.com/in/maxime-stepkowski-740451297/";
  const myGithub = "https://github.com/MaximeStepkowski";

  return (
    <div className="py-16 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Me Contacter</h1>

      <Section>
        <SectionTitle>Renseignements et Collaborations</SectionTitle>
        <SectionParagraph>
          N'hésitez pas à me contacter pour toute question, renseignement concernant mes projets, ou si vous souhaitez discuter d'une potentielle collaboration. Je suis toujours ouvert aux nouvelles opportunités et aux échanges constructifs.
        </SectionParagraph>
      </Section>

      <Section>
        <ContactInfoBox email={myEmail} />
      </Section>

      <Section>
        <SectionTitle>Réseaux</SectionTitle>
        <SectionParagraph>
          Vous pouvez me retrouver sur les réseaux sociaux pour suivre mes projets et mes actualités. Il est préférable de me contacter via mon adresse mail pour toute collaboration ou renseignement.
        </SectionParagraph>
        <SocialLinks linkedinUrl={myLinkedIn} githubUrl={myGithub} />
      </Section>
    </div>
  );
}