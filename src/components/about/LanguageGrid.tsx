import Image from 'next/image';

const languages = [
  { name: 'Python', icon: '/Portfolio/languages/python.svg' }, 
  { name: 'Java', icon: '/Portfolio/languages/java.svg' },
  { name: 'JavaScript', icon: '/Portfolio/languages/javascript.svg' },
  { name: 'TypeScript', icon: '/Portfolio/languages/typescript.svg' },
  { name: 'Ansible', icon: '/Portfolio/languages/ansible.svg' },
  { name: 'SQL', icon: '/Portfolio/languages/sql.svg' },
  { name: 'HTML', icon: '/Portfolio/languages/html.svg' },
  { name: 'CSS', icon: '/Portfolio/languages/css.svg' },
  { name: 'vscode', icon: '/Portfolio/languages/vscode.svg' },
  { name: 'shell', icon: '/Portfolio/languages/shell.svg' },
  { name: 'intellij', icon: '/Portfolio/languages/intellij.svg' },
  { name: 'Git', icon: '/Portfolio/languages/git.svg' },
  { name: 'nextjs', icon: '/Portfolio/languages/nextjs.svg' }
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