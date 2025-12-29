import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,3v13c0,1.657-1.343,3-3,3s-3-1.343-3-3V3C0,1.343,1.343,0,3,0s3,1.343,3,3ZM21,0c-1.657,0-3,1.343-3,3v18c0,1.657,1.343,3,3,3s3-1.343,3-3V3c0-1.657-1.343-3-3-3Zm-9,0c-1.657,0-3,1.343-3,3v7c0,1.657,1.343,3,3,3s3-1.343,3-3V3c0-1.657-1.343-3-3-3Z"/>
</svg>

);
