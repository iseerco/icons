import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHospital = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,16h3v3h-3v-3Zm5-6v-2h2v-2h-2v-2h-2v2h-2v2h2v2h2Zm-5,4h3v-3h-3v3Zm5,5h3v-3h-3v3Zm11-10v15H0v-15c0-1.654,1.346-3,3-3v-2.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5v2.5c1.654,0,3,1.346,3,3Zm-6-5.5c0-.276-.225-.5-.5-.5H6.5c-.275,0-.5.224-.5.5v17.5h12V3.5Zm-5,10.5h3v-3h-3v3Z"/></svg>

);
