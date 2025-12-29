import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShelves = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,0c-1.105,0-2,.895-2,2v6H1V0H0v24h1v-3h22v3h1V0h-7Zm-1,2c0-.552.448-1,1-1h6v7s-7,0-7,0V2ZM1,14c0-.552.449-1,1-1h5c.551,0,1,.448,1,1v6H1v-6Zm15,6h-7v-6c0-.552.449-1,1-1h5c.551,0,1,.448,1,1v6Zm1,0v-6c0-1.103-.897-2-2-2h-5c-.597,0-1.133.263-1.5.679-.367-.416-.903-.679-1.5-.679H2c-.364,0-.706.098-1,.269v-3.269h22v11h-6Z"/>
</svg>

);
