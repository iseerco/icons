import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H10.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h10c.509,0,.982,.153,1.378,.415L.146,23.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146L22.585,2.122c.262,.395,.415,.869,.415,1.378V13.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>

);
