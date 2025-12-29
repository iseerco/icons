import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramPrevious = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,10h3l-3.16-3.65c-.44-.49-1.22-.49-1.66,0l-3.18,3.65h3v4H0v7c0,1.65,1.35,3,3,3H21c1.65,0,3-1.35,3-3v-7H13v-4Zm9,11c0,.55-.45,1-1,1H3c-.55,0-1-.45-1-1v-5H22v5ZM21,0H3C1.35,0,0,1.35,0,3v7H5.41L13.41,2h3.17l-2.65,2.65c.14,.11,.28,.23,.4,.36l.96,1.11,4.12-4.12h1.59c.43,0,.79,.27,.94,.65l-5.17,5.17,1.88,2.18h5.36V3c0-1.65-1.35-3-3-3ZM3,2h1.59l-2.59,2.59v-1.59c0-.55,.45-1,1-1Zm1.59,6H2v-.59L7.41,2h3.17l-6,6Zm14.83,0l2.59-2.59v2.59h-2.59Z"/></svg>

);
