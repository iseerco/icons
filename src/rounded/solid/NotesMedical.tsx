import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,24H5c-2.757,0-5-2.243-5-5V7c0-.553.447-1,1-1s1,.447,1,1v12c0,1.654,1.346,3,3,3h12c.553,0,1,.447,1,1s-.447,1-1,1Zm0-4h-8c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h10c2.757,0,5,2.243,5,5v8h-4c-1.654,0-3,1.346-3,3v4Zm-2-7v-2h2c.553,0,1-.447,1-1s-.447-1-1-1h-2v-2c0-.553-.447-1-1-1s-1,.447-1,1v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2c0,.553.447,1,1,1s1-.447,1-1Zm5,2c-.552,0-1,.448-1,1v3.642c.443-.198.855-.467,1.201-.814l2.627-2.627c.346-.346.616-.758.814-1.201h-3.642Z"/></svg>

);
