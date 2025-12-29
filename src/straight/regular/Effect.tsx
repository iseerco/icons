import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Effect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2V0H0v2h3v14.142c-1.72.447-3,1.999-3,3.858,0,2.206,1.794,4,4,4,1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382,2.206,0,4-1.794,4-4,0-1.859-1.28-3.411-3-3.858V2h2.607l4.419,14.542c-1.204.69-2.026,1.973-2.026,3.458,0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4c-.016,0-.031.005-.047.005L15.697,2h8.303Zm-2,18c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-18,2c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm8-2c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-3-3.858c-.79.205-1.479.643-2,1.24-.521-.597-1.21-1.035-2-1.24V2h4v14.142Z"/>
</svg>

);
