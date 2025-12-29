import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SewingMachine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,22v2H0v-2c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3ZM3,14.062H1V5c0-1.302,.839-2.402,2-2.816V0h2V2h12V0h2V2h1c1.654,0,3,1.346,3,3v12H14v-7H7v4.062h-2v1.938H3v-1.938Zm14-4.562c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Zm0,4c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z"/>
</svg>

);
