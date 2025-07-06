type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <section
      className="max-w-5xl mx-auto mb-10 bg-zinc-800 rounded-xl p-6 shadow"
      style={{
        boxShadow: "inset 0 0 32px 0 #000, 0 2px 8px 0 #0006",
      }}
    >
      {children}
    </section>
  );
}
