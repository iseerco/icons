import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,6.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm19-3.5v17h-6.853l-3.846,3.18c-.362.322-.825.485-1.292.485-.476,0-.956-.169-1.338-.509l-3.748-3.156H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3ZM2,3v13.586L11,7.586l4,4,7-7v-1.586c0-.552-.448-1-1-1H3c-.551,0-1,.448-1,1Zm20,15V7.414l-7,7-4-4-7.586,7.586h4.24l4.326,3.645,4.449-3.645h5.571Z"/></svg>

);
