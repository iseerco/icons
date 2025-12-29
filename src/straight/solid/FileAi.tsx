import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileAi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19 23.414 23.414 19 19 19 19 23.414"/><polygon points="6.48 8.574 7.577 8.574 7.031 7.127 6.48 8.574"/><path d="M21,0H3A3,3,0,0,0,0,3V24H17V17h7V3A3,3,0,0,0,21,0ZM8.563,11.187,8.049,9.824H6l-.52,1.364H4.146L6.5,5.007,7.566,5,9.9,11.188Zm3.843-.056h-1.25V5.062h1.25Z"/></svg>

);
