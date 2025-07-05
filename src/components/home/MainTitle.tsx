'use client';

type MainTitleProps = {
  children: React.ReactNode;
};

export default function MainTitle({ children }: MainTitleProps) {
  return (
    <h1 className="text-5xl font-extrabold text-center text-white mb-8">
      {children}
    </h1>
  );
}