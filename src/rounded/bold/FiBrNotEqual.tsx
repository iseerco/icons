import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,16.5c0,.828-.672,1.5-1.5,1.5h-11.439l-2.182,5.091c-.244.568-.798.909-1.38.909-.197,0-.397-.039-.59-.121-.762-.326-1.114-1.208-.788-1.97l1.675-3.909H1.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h7.582l2.571-6H1.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h11.439L15.121.909c.327-.761,1.209-1.112,1.97-.788.762.326,1.114,1.208.788,1.97l-1.675,3.909h6.296c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5h-7.582l-2.571,6h10.154c.828,0,1.5.672,1.5,1.5Z"/>
</svg>

);
