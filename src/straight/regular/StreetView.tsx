import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StreetView = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-.5,17.5h2v-7h-2v-4c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v4h-2v7h2v-5h2v-6c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v6h2v5Zm9-4.455v2.036c2.648,.579,4,1.448,4,1.919,0,.748-3.402,2.5-10,2.5s-10-1.752-10-2.5c0-.471,1.352-1.34,4-1.919v-2.036c-3.398,.666-6,1.957-6,3.955,0,3.092,6.221,4.5,12,4.5s12-1.408,12-4.5c0-1.998-2.602-3.289-6-3.955Z"/></svg>

);
