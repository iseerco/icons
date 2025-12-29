import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,6h10v2h-4v8h-2v-8h-4v-2Zm17-3v17h-6.852l-3.847,3.18c-.362.322-.825.485-1.292.485-.476,0-.956-.169-1.338-.509l-3.748-3.156H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v15h5.654l4.326,3.645,4.449-3.645h5.571V3Z"/></svg>

);
