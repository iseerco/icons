import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFloppyDisks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,23h20v1H0V6c0-.886.387-1.684,1-2.234v19.234ZM24,5.165v15.835H3V3c0-1.654,1.346-3,3-3h12.835l5.165,5.165Zm-16,1.835h9V1h-9v6Zm15-1.421l-4.579-4.579h-.421v7H7V1h-1c-1.103,0-2,.897-2,2v17h19V5.579Zm-7,8.421c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Zm-1,0c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2,2-.897,2-2Z"/>
</svg>

);
