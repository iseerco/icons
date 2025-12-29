import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZeroPercent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8.9,10.5v3c0,.496-.404,.9-.9,.9s-.9-.404-.9-.9v-3c0-.496,.404-.9,.9-.9s.9,.404,.9,.9Zm15.1,1.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-12.5-2.769c0,.69,.56,1.25,1.25,1.25s1.25-.56,1.25-1.25-.56-1.25-1.25-1.25-1.25,.56-1.25,1.25Zm-1,1.269c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-3Zm8,4.231c0-.69-.56-1.25-1.25-1.25s-1.25,.56-1.25,1.25,.56,1.25,1.25,1.25,1.25-.56,1.25-1.25Zm0-6.75h-1.911l-5.222,8h1.911l5.222-8Z"/>
</svg>

);
