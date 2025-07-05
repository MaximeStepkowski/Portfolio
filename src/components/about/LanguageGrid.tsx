import Image from 'next/image';

const languages = [
  { name: 'Python', icon: '/languages/python.svg' }, 
  { name: 'Java', icon: '/languages/java.svg' },
  { name: 'JavaScript', icon: '/languages/javascript.svg' },
  { name: 'TypeScript', icon: '/languages/typescript.svg' },
  { name: 'Ansible', icon: '/languages/ansible.svg' },
  { name: 'SQL', icon: '/languages/sql.svg' },
  { name: 'HTML', icon: '/languages/html.svg' },
  { name: 'CSS', icon: '/languages/css.svg' },
  { name: 'vscode', icon: '/languages/vscode.svg' },
  { name: 'shell', icon: '/languages/shell.svg' },
  { name: 'intellij', icon: '/languages/intellij.svg' },
  { name: 'Git', icon: '/languages/git.svg' },
  { name: 'nextjs', icon: '/languages/nextjs.svg' }
];

export default function LanguageGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {languages.map((lang) => (
        <div key={lang.name} className="flex flex-col items-center p-4 bg-zinc-800 rounded-lg shadow-md hover:bg-[#b5c96c] transition-colors duration-200 w-32 h-32 text-white hover:text-black">
          <Image
            src={lang.icon}
            alt={lang.name}
            width={64}
            height={64}
            className="mb-2"
          />
          <span className="text-lg font-semibold text-center">{lang.name}</span>
        </div>
      ))}
    </div>
  );
}