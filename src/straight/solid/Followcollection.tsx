import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Followcollection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2.97c0,3.11-5.5,7.44-5.5,7.44,0,0-5.5-4.33-5.5-7.44,0-1.64,1.23-2.97,2.75-2.97s2.75,1.29,2.75,2.44c0-1.18,1.23-2.44,2.75-2.44s2.75,1.33,2.75,2.97Zm-13,.03c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3V11H11V3Zm13,13c0-1.65-1.35-3-3-3h-5c-1.65,0-3,1.35-3,3v8h11v-8Zm-13,0c0-1.65-1.35-3-3-3H3c-1.65,0-3,1.35-3,3v8H11v-8Z"/></svg>

);
