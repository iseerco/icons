import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Swatchbook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.778,13l3.692-3.692L14.692,1.53l-3.692,3.692V0H0v18.5c0,3.033,2.467,5.5,5.5,5.5h18.5v-11h-5.222Zm-4.085-8.642l4.95,4.95-8.642,8.642v-9.899l3.692-3.692Zm-5.692,7.642H2v-4h7v4Zm0-10v4H2V2h7ZM2,18.5v-4.5h7v4.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5Zm20,3.5h-12.222l7-7h5.222v7Zm-15-3.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/></svg>

);
