import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AuditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,0H6C3.243,0,1,2.243,1,5v14c0,2.757,2.243,5,5,5h9V0Zm-4,11h-6c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1s-.448,1-1,1Zm1-4H4c-.552,0-1-.448-1-1s.448-1,1-1h8c.552,0,1,.448,1,1s-.448,1-1,1Zm11,9.236v2.764c0,2.757-2.243,5-5,5h-1V0c2.206,0,4,1.794,4,4v7.764l1.789,3.578c.138.276.211.585.211.894Z"/>
</svg>

);
