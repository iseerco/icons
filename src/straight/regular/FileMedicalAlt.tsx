import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileMedicalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.414,0H5c-1.654,0-3,1.346-3,3v9h2V3c0-.551.449-1,1-1h8v7h7v13H4v-4h-2v6h20V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586v-3.586Zm-7.965,12.586H0v-2h5.965l2.659-3.988,3,6,1.341-2.012h5.035v2h-3.965l-2.659,3.988-3-6-1.341,2.012Z"/></svg>

);
