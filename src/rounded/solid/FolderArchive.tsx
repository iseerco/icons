import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderArchive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7.5,0H3.5C1.567,0,0,1.567,0,3.5V20.5c0,1.933,1.567,3.5,3.5,3.5H7.5c1.933,0,3.5-1.567,3.5-3.5V3.5c0-1.933-1.567-3.5-3.5-3.5Zm-2,3c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm1,18h-2c-1.105,0-2-.895-2-2V11c0-1.105,.895-2,2-2h2c1.105,0,2,.895,2,2v8c0,1.105-.895,2-2,2Zm0-2h-2V11h2v8ZM20.5,0h-4c-1.933,0-3.5,1.567-3.5,3.5V20.5c0,1.933,1.567,3.5,3.5,3.5h4c1.933,0,3.5-1.567,3.5-3.5V3.5c0-1.933-1.567-3.5-3.5-3.5Zm-2,3c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm1,18h-2c-1.105,0-2-.895-2-2V11c0-1.105,.895-2,2-2h2c1.105,0,2,.895,2,2v8c0,1.105-.895,2-2,2Zm0-2h-2V11h2v8Z"/>
</svg>

);
