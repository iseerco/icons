import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStarShooting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.478,15h4.522v1.083l-3.309,2.257,1.377,4.314-.886.619-3.664-2.533-3.609,2.533-.853-.642,1.279-4.357-3.336-2.184v-1.09h4.55l1.392-4.727h1.147l1.39,4.727ZM21.939-.061l-10,10,2.121,2.121L24.061,2.061,21.939-.061Zm-7.879,4.121l-2.121-2.121-5,5,2.121,2.121,5-5Zm.879,10.879l2.121,2.121,5-5-2.121-2.121-5,5Z"/></svg>

);
