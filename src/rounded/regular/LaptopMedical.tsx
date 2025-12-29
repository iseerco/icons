import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,15.172v-7.172c0-2.757-2.243-5-5-5H7c-2.757,0-5,2.243-5,5v7.172c-1.164.413-2,1.524-2,2.828,0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3,0-1.304-.836-2.415-2-2.828ZM7,5h10c1.654,0,3,1.346,3,3v7h-4.5c-.265,0-.52.105-.707.293l-.707.707h-4.172l-.707-.707c-.188-.188-.442-.293-.707-.293h-4.5v-7c0-1.654,1.346-3,3-3Zm14,14H3c-.551,0-1-.449-1-1s.449-1,1-1h5.086l.707.707c.188.188.442.293.707.293h5c.265,0,.52-.105.707-.293l.707-.707h5.086c.551,0,1,.449,1,1s-.449,1-1,1Zm-13-9c0-.552.448-1,1-1h2v-2c0-.552.448-1,1-1s1,.448,1,1v2h2c.552,0,1,.448,1,1s-.448,1-1,1h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2c-.552,0-1-.448-1-1Z"/></svg>

);
