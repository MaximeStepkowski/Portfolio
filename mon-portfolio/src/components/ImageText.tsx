type ImageTextProps = {
  imageSrc: string;
  altText: string;
  children: React.ReactNode;
};

export default function ImageText({ imageSrc, altText, children }: ImageTextProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 flex items-center gap-8 py-8">
      <img
        src={imageSrc}
        alt={altText}
        className="w-1/2 object-cover border-4 border-purple-500 shadow-[0_0_25px_5px_rgba(168,85,247,0.7)] "
      />
      <div className="w-1/2 text-lg">
        {children}
      </div>
    </div>
  );
}
