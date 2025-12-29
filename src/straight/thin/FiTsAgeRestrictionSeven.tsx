import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAgeRestrictionSeven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4.5-11.5h2.5v1h-2.5v2.5h-1v-2.5h-2.5v-1h2.5v-2.5h1v2.5ZM5,7h7v.723l-4.626,9.534-.899-.438,4.279-8.819h-5.754v-1Z"/>
</svg>

);
