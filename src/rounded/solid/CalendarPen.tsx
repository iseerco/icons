import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.27,19.48c-.813,.813-1.27,1.915-1.27,3.065v1.455h1.455c1.15,0,2.252-.457,3.065-1.27l6.807-6.807c.897-.897,.897-2.353,0-3.25-.897-.897-2.353-.897-3.25,0l-6.807,6.807Zm10.73-11.48H0v-1C0,4.243,2.243,2,5,2h1V1c0-.552,.447-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5v1ZM0,10H21.357c-.839,.101-1.667,.482-2.392,1.207l-7.207,7.207c-1.134,1.133-1.758,2.64-1.758,4.243v1.343H5c-2.761,0-5-2.239-5-5V10Z"/></svg>

);
