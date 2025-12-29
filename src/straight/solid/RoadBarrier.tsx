import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RoadBarrier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,2V22h-2v-7h-5.879l5.879-5.879v-2.828L13.293,15H7.914L18.914,4h3.086V2h2Zm-7.914,2h-5.379L2,12.707v-2.828L7.879,4H2V2H0V22H2v-7h3.086L16.086,4Z"/>
</svg>

);
