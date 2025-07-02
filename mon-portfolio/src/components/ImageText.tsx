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
        className="w-2/5 max-w-sm object-cover border-4 border-[#F2DCB3] shadow-[0_0_25px_5px_#A67153]"
      />
      <div className="w-3/5 text-lg">
        {children}
      </div>
    </div>
  );
}
