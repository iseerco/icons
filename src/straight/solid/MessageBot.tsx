import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageBot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,10.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-6.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm14.5,0v2h-2v9h-4.852l-3.847,3.18c-.362.322-.825.485-1.292.485-.476,0-.956-.169-1.338-.509l-3.748-3.156H2v-9H0v-2h2V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v6h2Zm-6-1c0-1.105-.895-2-2-2h-8c-1.105,0-2,.895-2,2v5c0,1.105.895,2,2,2h8c1.105,0,2-.895,2-2v-5Z"/></svg>

);
