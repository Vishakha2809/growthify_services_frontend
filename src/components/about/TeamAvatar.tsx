import Image from "next/image";
import type { Crop } from "@/data/team";

type TeamAvatarProps = {
  src: string;
  crop: Crop;
  alt?: string;
  sizes: string;
  className?: string;
};

/* Round portrait that zooms into the face using the member's crop settings */
export default function TeamAvatar({ src, crop, alt = "", sizes, className = "" }: TeamAvatarProps) {
  return (
    <span className={`relative block overflow-hidden rounded-full bg-brand-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{
          objectPosition: crop.position ?? "50% 50%",
          transform: `translate(${crop.x}%, ${crop.y}%) scale(${crop.zoom})`,
        }}
      />
    </span>
  );
}
