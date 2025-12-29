import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Percent70 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.4,10.5v3c0,.496-.404.9-.9.9s-.9-.404-.9-.9v-3c0-.496.404-.9.9-.9s.9.404.9.9Zm11.6,1.5c0,6.627-5.373,12-12,12S0,18.627,0,12,5.373,0,12,0s12,5.373,12,12Zm-9-2.769c0,.69.56,1.25,1.25,1.25s1.25-.56,1.25-1.25-.56-1.25-1.25-1.25-1.25.56-1.25,1.25Zm-7-1.231H3v1.6h2.994l-2.81,5.705,1.432.715,3.385-6.857v-1.163Zm6,2.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-3Zm2.778,5.481l5.222-8h-1.911l-5.222,8h1.911Zm5.222-1.25c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25,1.25.56,1.25,1.25,1.25,1.25-.56,1.25-1.25Z"/>
</svg>

);
