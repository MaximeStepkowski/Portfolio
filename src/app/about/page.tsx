import Section from '@/components/about/Section';
import SectionTitle from '@/components/about/SectionTitle';
import SectionList from '@/components/about/SectionList';
import SectionParagraph from '@/components/about/SectionParagraph';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <Section>
        <SectionTitle>Pourquoi l’informatique</SectionTitle>
        <div className="flex flex-col gap-4">
          <SectionParagraph>
            Depuis mon enfance, j’ai développé un intérêt marqué pour le domaine numérique. En observant mon père concevoir des modèles visuels de voitures sur le jeu vidéo de course TrackMania, j’ai pris conscience du potentiel créatif des outils numériques. Cette première exposition a suscité mon intérêt pour l’informatique.
          </SectionParagraph>
          <SectionParagraph>
            Au collège, cet intérêt s’est renforcé et s’est traduit par une volonté d’apprendre de manière autonome. J’ai exploré différentes facettes de l’informatique, de la programmation à la conception graphique, découvrant un champ d’application vaste et diversifié. Chaque projet personnel constituait une étape supplémentaire dans l’acquisition de compétences techniques.
          </SectionParagraph>
          <SectionParagraph>
            À cette période, j’ai eu l’occasion d’effectuer un stage dans un cabinet d’avocat, qui m’a permis de découvrir un environnement stimulant, mais dans lequel je ne retrouvais pas l’aspect technique et créatif qui m’attirait. C’est en classe de première, grâce à l’option NSI (Numérique et Sciences Informatiques), que j’ai confirmé mon orientation vers l’informatique. L’accompagnement d’un enseignant engagé m’a permis de mieux comprendre les enjeux et la complexité du secteur, confortant ainsi mon choix.
          </SectionParagraph>
          <SectionParagraph>
            Le BUT (Bachelor Universitaire de Technologie) en informatique s’est présenté comme la voie la plus adaptée à mon projet. Souhaitant découvrir l’ensemble des domaines de l’informatique avant de me spécialiser, j’ai opté pour cette formation généraliste. Elle m’a permis d’acquérir des compétences solides en bases de données, réseaux, développement d’applications et conception web, constituant ainsi une base technique complète.
          </SectionParagraph>
          <SectionParagraph>
            Aujourd’hui, je m’intéresse particulièrement à la cybersécurité. En parallèle de mes études, je me forme de manière autonome à ses différents aspects. La sécurisation des données et des systèmes représente un enjeu majeur dans le contexte actuel, et je souhaite m’investir pleinement dans ce domaine.
          </SectionParagraph>
        </div>
      </Section>

      <Section>
        <SectionTitle>Mon parcours</SectionTitle>
        <div className="flex flex-col gap-4">
          <SectionParagraph>
            Mon stage en cabinet d'avocat, effectué au collège, m'a permis de découvrir le monde du droit et son fonctionnement. J'ai apprécié la rigueur, l'analyse et la résolution de problèmes que requiert ce domaine. Cependant, j'ai rapidement compris que cette voie ne correspondait pas pleinement à mes aspirations profondes. Le stage a été une expérience enrichissante, mais il a surtout confirmé mon intérêt pour un domaine plus technique et créatif.
          </SectionParagraph>
          <SectionParagraph>
            En terminale, la nécessité de financer mes projets personnels m'a conduit à explorer différentes options. J'ai découvert le service civique, une opportunité unique de concilier engagement bénévole et rémunération. Grâce au soutien de mon entraîneur de volley-ball, j'ai pu intégrer le club et encadrer de jeunes joueurs. Cette année a été intense, combinant les exigences du baccalauréat, l'apprentissage du code de la route et du permis de conduire, et les responsabilités du service civique. Malgré cette charge de travail conséquente, j'ai su préserver du temps pour cultiver ma passion pour l'informatique, consacrant chaque semaine des heures à l'apprentissage et à la pratique. Cette année a été une véritable leçon de gestion du temps et d'organisation, mais aussi une confirmation de ma détermination et de ma capacité à concilier mes différentes ambitions.
          </SectionParagraph>
          <SectionParagraph>
            Le BUT m'a offert un cadre plus propice à la concentration sur mes études. Le temps libéré ne m'a pas incité à la paresse, bien au contraire. J'ai continué à me former en autodidacte, en complétant mes connaissances théoriques par des recherches personnelles. J'ai cherché à mettre en pratique mes acquis scolaires, en les combinant avec mes propres explorations. Cette démarche proactive a renforcé mes compétences et consolidé ma passion pour l'informatique.
          </SectionParagraph>
          <SectionParagraph>
            En deuxième année de BUT, j’ai eu l’occasion de commencer l’année en alternance chez CGI.
          </SectionParagraph>
          <SectionParagraph>
            En tant que développeur DevOps en alternance chez CGI, je contribue activement à l'amélioration de nos processus d'infrastructure grâce à l'automatisation. Mon rôle principal consiste à identifier et automatiser les tâches redondantes et chronophages, afin d'optimiser l'efficacité et la fiabilité de nos opérations.
          </SectionParagraph>
          <SectionList
            title="Compétences DevOps et outils utilisés :"
            items={[
              "Spécialisation dans l'utilisation d'Ansible pour orchestrer et automatiser le déploiement et la configuration de machines virtuelles.",
              "Gestion efficace des configurations complexes, cohérence entre les environnements, réduction du risque d'erreur humaine.",
              "Utilisation de Packer pour créer des images de machines virtuelles cohérentes et reproductibles.",
              "Travail avec différents hyperviseurs (VMware vSphere, Hyper-V).",
              "Recherche constante de nouvelles solutions pour améliorer les processus et optimiser les performances."
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>
          <span style={{ color: "#c9e560" }}>Mes compétences</span>
        </SectionTitle>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 flex flex-col min-h-[460px] border-2 border-[#c9e560] rounded-xl p-6 bg-zinc-900 shadow-lg text-center">
            <div className="text-2xl font-bold mb-4 text-white">Compétences techniques</div>
            <hr className="my-4 border-[#c9e560] w-full" />
            <div className="flex flex-col gap-2 font-semibold text-lg text-white">
              <div>Création numérique</div>
              <div>Programmation</div>
              <div>Langages (java, python, javascript, ansible, …)</div>
              <div>Base de données</div>
              <div>Réseau et système</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-[460px] border-2 border-[#c9e560] rounded-xl p-6 bg-zinc-900 shadow-lg text-center">
            <div className="text-2xl font-bold mb-4 text-white">Soft skills</div>
            <hr className="my-4 border-[#c9e560] w-full" />
            <div className="flex flex-col gap-2 font-semibold text-lg text-white">
              <div>Apprentissage autonome</div>
              <div>Gestion du temps</div>
              <div>Résolution de problèmes</div>
              <div>Prise d’initiative</div>
              <div>Communication</div>
              <div>Adaptabilité</div>
              <div>Gestion de la pression</div>
              <div>Organisation</div>
              <div>Curiosité intellectuelle</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Mon projet</SectionTitle>
        <div className="flex flex-col gap-4">
          <SectionParagraph>
            À la fin de mon BUT informatique, j'envisage de poursuivre mes études en intégrant une école d'ingénieur spécialisée en cybersécurité. Ce choix est motivé par ma passion pour la sécurité des systèmes d'information et mon désir de contribuer à la protection des données dans un monde de plus en plus numérique. La cybersécurité est un domaine en pleine expansion, avec une demande croissante de professionnels qualifiés, ce qui rend cette spécialisation d'autant plus pertinente.
          </SectionParagraph>
          <SectionParagraph>
            En intégrant une école d'ingénieur, je pourrai approfondir mes connaissances sur des sujets cruciaux tels que l'analyse des vulnérabilités, les tests d'intrusion et la gestion des risques. Je suis particulièrement attiré par l'aspect pratique de cette formation, qui inclut des projets concrets et des stages en entreprise, me permettant d'appliquer mes compétences dans des situations réelles.
          </SectionParagraph>
        </div>
      </Section>
    </div>
  );
}
