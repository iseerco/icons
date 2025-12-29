import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsZeroPercent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8,8c-1.381,0-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-3c0-1.381-1.119-2.5-2.5-2.5Zm.9,5.5c0,.496-.404,.9-.9,.9s-.9-.404-.9-.9v-3c0-.496,.404-.9,.9-.9s.9,.404,.9,.9v3Zm9.6,1.231c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25,.56-1.25,1.25-1.25,1.25,.56,1.25,1.25Zm-7-5.5c0-.69,.56-1.25,1.25-1.25s1.25,.56,1.25,1.25-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25Zm7-1.25l-5.222,8h-1.911l5.222-8h1.911ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Z"/>
</svg>

);
