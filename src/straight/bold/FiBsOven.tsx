import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsOven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5C2.57,0,1,1.57,1,3.5v20.5h22V3.5c0-1.93-1.57-3.5-3.5-3.5ZM4.5,3h15c.275,0,.5.224.5.5v4.5H4V3.5c0-.276.224-.5.5-.5Zm-.5,18v-10h16v10H4Zm2-8h12v6H6v-6Zm4.5-7.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm4.5,0c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm-9,0c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/>
</svg>

);
