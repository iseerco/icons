import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Binoculars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5h-1V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v2h-4V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v2h-1c-1.654,0-3,1.346-3,3v10.5c0,3.033,2.467,5.5,5.5,5.5s5.5-2.467,5.5-5.5v-6.5h2v6.5c0,3.033,2.467,5.5,5.5,5.5s5.5-2.467,5.5-5.5V8c0-1.654-1.346-3-3-3Zm-5-2c0-.551,.449-1,1-1s1,.449,1,1v2h-2V3Zm-10,0c0-.551,.449-1,1-1s1,.449,1,1v2h-2V3Zm-.5,19c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Zm3.5-12v4.261c-.952-.787-2.172-1.261-3.5-1.261s-2.548,.474-3.5,1.261v-6.261c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1v6.261c-.952-.787-2.172-1.261-3.5-1.261s-2.548,.474-3.5,1.261v-4.261h-6Zm9.5,12c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Z"/></svg>

);
