type SectionInfoProps = {
  title: string;
  children: React.ReactNode;
};

export default function TitleText({ title, children }: SectionInfoProps) {
  return (
    <div className="max-w-xl text-center">
      <h2 className="text-2xl font-bold text-[#F2DCB3] mb-2">{title}</h2>
      <p className="text-white">{children}</p>
    </div>
  );
}
