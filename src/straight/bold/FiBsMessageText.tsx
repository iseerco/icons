import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,5h10v3h-3.5v8h-3v-8h-3.5v-3Zm17-1.5v16.5h-6.672l-3.708,3.065c-.448.399-1.024.601-1.606.601-.595,0-1.196-.21-1.675-.636l-3.598-3.03H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v13.5h4.836l4.167,3.511,4.246-3.511h4.751V3.5Z"/></svg>

);
