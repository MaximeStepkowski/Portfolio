import Card from '../../components/Card';
export default function ProjectsPage() {
  const projects = [
    { title: 'Portfolio', description: 'Un site personnel en Next.js' },
    { title: 'App météo', description: 'Une application météo responsive' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, idx) => (
        <Card key={idx} title={project.title} description={project.description} />
      ))}
    </div>
  );
}
