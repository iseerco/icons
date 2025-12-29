import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,18c-.738-.001-1.451,.271-2,.765V3C2,1.343,3.343,0,5,0h1V18h-2ZM20,0h-2V11l-2.5-2.5-2.5,2.5V0h-5V18h14V2c0-1.105-.895-2-2-2ZM2,22c0,1.105,.895,2,2,2H22v-4H4c-1.105,0-2,.895-2,2Z"/></svg>

);
