import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStepForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,0v11.399L3,.066v23.868l17-11.333v11.399h1V0h-1ZM4,22.066V1.934l15.099,10.066-15.099,10.066Z"/></svg>

);
