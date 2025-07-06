import Image from "next/image";

type ImageTextProps = {
  imageSrc: string;
  altText: string;
  children: React.ReactNode;
};

export default function ImageText({ imageSrc, altText, children }: ImageTextProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 flex items-center gap-8 py-8">
      <Image
        src={imageSrc}
        alt={altText}
        width={500}
        height={500}
        className="w-2/5 max-w-sm object-cover border-4 border-[#c9e560] shadow-[0_0_25px_5px_#c9e560]"
      />
      <div className="w-3/5 text-lg p-6 ">
        {children}
      </div>
    </div>
  );
}
