import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHose = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,22.5c0,.828-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h21c.829,0,1.5.672,1.5,1.5Zm-1.5-6.5H1.5c-.829,0-1.5.672-1.5,1.5s.671,1.5,1.5,1.5h21c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5ZM6,5h9.042c.199.981,1.155,1.662,2.183,1.466l5.986-1.296c.46-.1.788-.507.788-.977v-1.386c0-.471-.328-.878-.789-.977l-6.003-1.299c-1.023-.185-1.968.495-2.166,1.469H6C2.691,2,0,4.691,0,8s2.691,6,6,6h16.5c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5H6c-1.654,0-3-1.346-3-3s1.346-3,3-3Z"/>
</svg>

);
