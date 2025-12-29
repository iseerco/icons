import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpToDottedLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,1c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1ZM2,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1ZM6,2c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm8,0c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1ZM22,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1ZM10.586,4.586l-5.5,5.5,1.414,1.414,4.5-4.5V24h2V7l4.5,4.5,1.414-1.414-5.5-5.5c-.779-.78-2.049-.78-2.828,0ZM18,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>

);
