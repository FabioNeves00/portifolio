import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    url: string;
    className?: string;
}

export const Image = ({url, className,...props}: ImageProps) => {
  return (
    <div className="h-[30%] center">
      <img {...props} src={url} className={className}/>
    </div>
  )
}
