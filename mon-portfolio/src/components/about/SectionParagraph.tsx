type SectionParagraphProps = {
  children: React.ReactNode;
};

export default function SectionParagraph({ children }: SectionParagraphProps) {
  return (
    <p className="mb-3 text-white">{children}</p>
  );
}
