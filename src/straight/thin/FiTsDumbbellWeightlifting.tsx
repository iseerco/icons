import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDumbbellWeightlifting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3h-1V0h-1v3H2V0h-1v3H0v1h1v3h1v-3h2.223l4.777,7.644v7.356h1v5h1v-5h2v5h1v-5h1v-7.356l4.777-7.644h2.223v3h1v-3h1v-1Zm-10,15h-4v-6h4v6Zm.223-7h-4.445l-4.375-7h13.195l-4.375,7Zm-2.223-1c1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Z"/>
</svg>

);
