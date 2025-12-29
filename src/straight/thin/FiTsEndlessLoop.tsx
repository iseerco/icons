import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEndlessLoop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,14.5c0,4.136-3.364,7.5-7.5,7.5H7.5c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5h6.25L8.145,1.352l.71-.704,5.677,5.721c.623.623.623,1.64-.001,2.264l-5.676,5.719-.71-.704,5.605-5.648h-6.25c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5h9c3.584,0,6.5-2.916,6.5-6.5,0-3.415-2.649-6.218-6-6.475v-1c3.902.259,7,3.508,7,7.475Z"/>
</svg>

);
