import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFireHydrant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,21h-.5v-6h.5c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5h-.5v-4c0-2.791-1.915-5.143-4.5-5.81v-.69c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v.69c-2.585.668-4.5,3.019-4.5,5.81v4h-.5c-.828,0-1.5.671-1.5,1.5s.672,1.5,1.5,1.5h.5v6h-.5c-.828,0-1.5.671-1.5,1.5s.672,1.5,1.5,1.5h13c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5ZM12,5c1.304,0,2.415.836,2.828,2h-5.656c.413-1.164,1.524-2,2.828-2Zm-3,5h6v11h-6v-11Zm4.5,3.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
</svg>

);
