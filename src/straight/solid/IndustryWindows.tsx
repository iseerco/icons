import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndustryWindows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,11.102V5.839l-5,5.247V5.919l-5.889,5.712L5.077,0H0V21c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3V5.831l-5,5.271Zm-9,7.898h-3v-3h3v3Zm5,0h-3v-3h3v3Zm5,0h-3v-3h3v3Z"/></svg>

);
