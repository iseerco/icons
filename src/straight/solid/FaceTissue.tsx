import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceTissue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.373,0,0,5.373,0,12c0,.657,.067,1.298,.169,1.926l12.128-2.226-.649,3.554,.352,.35,2.024-2.015,1.996,1.997,1.652-1.653,1.414,1.414-3.066,3.067-2.004-2.003-2.017,2.001-.786-.78-1.132,6.201c.626,.101,1.263,.167,1.918,.167,6.627,0,12-5.373,12-12S18.627,0,12,0ZM7.625,11.781l-1.25-1.562,1.524-1.219-1.524-1.219,1.25-1.562,3.476,2.781-3.476,2.781Zm10-1.562l-1.25,1.562-3.476-2.781,3.476-2.781,1.25,1.562-1.524,1.219,1.524,1.219Zm-9.596,13.723l-2.735-2.188-4.361,1.307,1.35-4.362L.1,15.972l9.709-1.782-1.78,9.752Z"/></svg>

);
