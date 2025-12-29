import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCardClub = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h18V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H6V3.5c0-.276.224-.5.5-.5h11c.276,0,.5.224.5.5v17.5Zm-2-8c0,1.105-.895,2-2,2-.547,0-1.042-.221-1.403-.576.296.994.729,1.903,1.403,2.576h-4c.674-.674,1.107-1.583,1.403-2.576-.361.356-.856.576-1.403.576-1.105,0-2-.895-2-2s.895-2,2-2c.101,0,.197.015.293.03-.182-.302-.293-.651-.293-1.03,0-1.105.895-2,2-2s2,.895,2,2c0,.378-.111.728-.293,1.03.097-.014.193-.03.293-.03,1.105,0,2,.895,2,2Z"/>
</svg>

);
