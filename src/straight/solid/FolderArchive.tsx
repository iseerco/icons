import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderArchive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8.5,0H2.5C1.119,0,0,1.119,0,2.5V24H11V2.5c0-1.381-1.119-2.5-2.5-2.5Zm-3,3c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm3,18H2.5V9h6v12Zm-2-2h-2V11h2v8ZM21.5,0h-6c-1.381,0-2.5,1.119-2.5,2.5V24h11V2.5c0-1.381-1.119-2.5-2.5-2.5Zm-3,3c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm3,18h-6V9h6v12Zm-2-2h-2V11h2v8Z"/>
</svg>

);
