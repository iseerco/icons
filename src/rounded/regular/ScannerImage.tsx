import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScannerImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.202,15.662L3.64.231c-.428-.353-1.057-.294-1.408.13-.354.425-.295,1.055.129,1.408l15.917,13.231H4c-2.206,0-4,1.794-4,4v1c0,2.206,1.794,4,4,4h16c2.206,0,4-1.794,4-4v-1c0-1.393-.716-2.622-1.798-3.338Zm-.202,4.338c0,1.105-.895,2-2,2H4c-1.105,0-2-.895-2-2v-1c0-1.105.895-2,2-2h16c1.105,0,2,.895,2,2v1Zm-16-.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
</svg>

);
