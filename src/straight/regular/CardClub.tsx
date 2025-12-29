import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardClub = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3Zm1,22H5V3c0-.551.449-1,1-1h12c.551,0,1,.449,1,1v19Zm-3-9c0,1.105-.895,2-2,2-.547,0-1.042-.221-1.403-.576.296.994.729,1.903,1.403,2.576h-4c.674-.674,1.107-1.583,1.403-2.576-.361.356-.856.576-1.403.576-1.105,0-2-.895-2-2s.895-2,2-2c.101,0,.197.015.293.03-.182-.302-.293-.651-.293-1.03,0-1.105.895-2,2-2s2,.895,2,2c0,.378-.111.728-.293,1.03.097-.014.193-.03.293-.03,1.105,0,2,.895,2,2Z"/>
</svg>

);
