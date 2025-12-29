import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Projector = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13c0-1.654-1.346-3-3-3h-1.343c-.825-2.328-3.049-4-5.657-4s-4.831,1.672-5.657,4H3c-1.654,0-3,1.346-3,3v9H3v2h2v-2h14v2h2v-2h3V13Zm-10-5c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm8,12H2v-7c0-.552,.449-1,1-1h5c0,3.309,2.691,6,6,6s6-2.691,6-6h1c.552,0,1,.448,1,1v7ZM7,15.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5ZM15,4h-2V0h2V4Zm3.866,1.572l-1.732-1,2-3.465,1.732,1-2,3.465Zm-9.732,0l-2-3.465,1.732-1,2,3.465-1.732,1Z"/></svg>

);
