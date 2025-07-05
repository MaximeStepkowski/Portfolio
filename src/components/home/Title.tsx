type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-4xl font-bold text-center text-white mb-6 pt-8">
      {children}
    </h1>
  );
}