import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileMedicalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,7v17H2v-8h5.035l1.341-2.012,3,6,2.659-3.988h3.965v-2h-5.035l-1.341,2.012-3-6-2.659,3.988h-3.965V3c0-1.657,1.343-3,3-3h10v7h7ZM17,.586v4.414h4.414L17,.586Z"/></svg>

);
