import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subtitles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3A3,3,0,0,0,0,5V22H24V5A3,3,0,0,0,21,2ZM4,10H7v2H4Zm11,7H4V15H15Zm5,0H17V15h3Zm0-5H9V10H20Z"/></svg>

);
