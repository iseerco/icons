import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PumpMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,5h-6v-2c0-1.654,1.346-3,3-3h7.238c.791,0,1.558.232,2.218.671l2.503,1.669-1.109,1.664-2.502-1.668c-.33-.22-.714-.336-1.109-.336h-4.238v3Zm.826,2h-7.651c-2.513,1.384-4.174,4.057-4.174,7v10h16v-10c0-2.943-1.661-5.616-4.174-7Zm.174,10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"/></svg>

);
