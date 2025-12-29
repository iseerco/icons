import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Life = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,11c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm4,7.438v5.562h-8v-5.562L1.821,12.735l1.357-1.47,6.212,5.735h5.219l6.212-5.735,1.357,1.47-6.179,5.703Zm-4-9.271s5-3.49,5-6.394c0-1.531-1.119-2.773-2.5-2.773s-2.5,1.241-2.5,2.773c0-1.531-1.119-2.773-2.5-2.773s-2.5,1.241-2.5,2.773c0,2.904,5,6.394,5,6.394Z"/>
</svg>

);
