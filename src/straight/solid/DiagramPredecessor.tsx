import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramPredecessor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,14H24v7c0,1.65-1.35,3-3,3H3c-1.65,0-3-1.35-3-3v-7Zm14-4H0V3C0,1.35,1.35,0,3,0H11c1.65,0,3,1.35,3,3h4c1.65,0,3,1.35,3,3v2h3l-3.16,3.65c-.44,.49-1.22,.49-1.66,0l-3.18-3.65h3v-2c0-.55-.45-1-1-1h-4v5ZM11,2h-2.59L2.41,8h3.17L11.47,2.12c-.14-.07-.3-.12-.47-.12ZM2,3v2.59l3.59-3.59H3c-.55,0-1,.45-1,1Zm10,5v-3.59l-3.59,3.59h3.59Z"/></svg>

);
