import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStateCountry = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,16v2h1v3H0v3h11v-3h-1v-3h1v-2l-5.5-2-5.5,2Zm7,5h-3v-3h3v3ZM24,4v-2l-5.5-2-5.5,2v2h1v3h-1v3h11v-3h-1v-3h1Zm-4,3h-3v-3h3v3Zm.621,11l3.379,3.379v2.621h-1.621l-3-3h-5.379v-5.002l-8-6.579v-3.419h-3.121L0,3.121V0h1.121l3,3h4.879v5.002l8,6.578v3.42h3.621Z"/>
</svg>

);
