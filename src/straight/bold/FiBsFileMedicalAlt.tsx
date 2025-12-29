import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileMedicalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.803,16H0v-3h6.197l2.925-4.388,3.166,5.751.909-1.363h3.803v3h-2.197l-2.76,4.14-3.166-5.751-1.075,1.612ZM16.381,0H5c-1.654,0-3,1.346-3,3v8h3V3h9v5h5v13H5v-3h-3v6h20V5.665L16.381,0Z"/></svg>

);
