type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold text-[#b2cc4c] mb-4">{children}</h2>
  );
}
