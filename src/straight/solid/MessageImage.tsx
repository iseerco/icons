import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,7.586l4,4L23.974,2.612c-.191-1.471-1.451-2.612-2.974-2.612H3C1.346,0,0,1.346,0,3v15.586L11,7.586Zm-5.5-2.586c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm18.5.414v14.586h-6.853l-3.846,3.18c-.362.322-.825.485-1.292.485-.476,0-.956-.169-1.338-.509l-3.748-3.156H1.414l9.586-9.586,4,4,9-9Z"/></svg>

);
