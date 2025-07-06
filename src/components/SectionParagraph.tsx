type SectionParagraphProps = {
  children: React.ReactNode;
};

export default function SectionParagraph({ children }: SectionParagraphProps) {
  return (
    <p className="mb-6 text-white text-justify">{children}</p>
  );
}
