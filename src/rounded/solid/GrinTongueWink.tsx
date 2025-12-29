import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,16h2v.6c-.062,1.839-1.939,1.837-2,0Zm13-4A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12ZM7,11h3a1,1,0,0,0,0-2H7A1,1,0,0,0,7,11Zm10,4a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2H9v.6c.133,4.495,5.87,4.49,6,0V16h1A1,1,0,0,0,17,15Zm1-5a2,2,0,0,0-4,0c0,1,.895,1,2,1S18,11,18,10Z"/></svg>

);
