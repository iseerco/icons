import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BasketShoppingPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.941,8C20.441,3.507,16.624,0,12,0S3.559,3.507,3.059,8H.047l1.954,13.305c.226,1.537,1.567,2.695,3.12,2.695h13.795c1.553,0,2.895-1.159,3.121-2.695l1.954-13.305h-3.05ZM12,2c3.519,0,6.432,2.613,6.92,6H5.08c.488-3.387,3.401-6,6.92-6Zm8.059,19.014c-.083,.562-.574,.986-1.142,.986H5.122c-.568,0-1.059-.424-1.142-.986l-1.617-11.014H21.676l-1.617,11.014Zm-9.059-4.014h-3v-2h3v-3h2v3h3v2h-3v3h-2v-3Z"/>
</svg>

);
