import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RoadBarrier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,2v2H2V2H0V22H2v-7H22v7h2V2h-2Zm-5.086,4h4.172l-7,7h-4.172l7-7ZM7.086,13H2.914l7-7h4.172l-7,7Zm0-7L2,11.086V6H7.086Zm9.828,7l5.086-5.086v5.086h-5.086Z"/>
</svg>

);
