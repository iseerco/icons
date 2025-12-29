import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AuditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,6c0,.552-.448,1-1,1h-6c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1Zm-2,3h-4c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1s-.448-1-1-1Zm12,7.236v2.764c0,2.757-2.243,5-5,5H6c-2.757,0-5-2.243-5-5V5C1,2.243,3.243,0,6,0h10c2.757,0,5,2.243,5,5v6.764l1.789,3.578c.138.276.211.585.211.894Zm-17,5.764h9V2H6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3Zm15-5.764l-1.789-3.578c-.138-.276-.211-.585-.211-.894v-6.764c0-1.302-.839-2.402-2-2.816v19.816h1c1.654,0,3-1.346,3-3v-2.764Z"/>
</svg>

);
