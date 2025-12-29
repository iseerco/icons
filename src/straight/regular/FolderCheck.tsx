import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,3H12.236L8.236,1H3C1.346,1,0,2.346,0,4V23H24V6c0-1.654-1.346-3-3-3ZM3,3H7.764l4,2h9.236c.551,0,1,.448,1,1v1H2v-3c0-.552,.449-1,1-1Zm-1,18V9H22v12H2Zm14.042-9.934l1.414,1.414-4.926,4.926c-.79,.79-2.078,.791-2.868,0l-2.87-2.87,1.414-1.414,2.87,2.87,4.965-4.926Z"/>
</svg>

);
