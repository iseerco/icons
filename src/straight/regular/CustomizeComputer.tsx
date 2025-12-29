import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CustomizeComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,8.24l2-2v13.76h-11v2h4.5v2H6.5v-2h4.5v-2H0V5c0-1.654,1.346-3,3-3h13.039l-1.79,2H3c-.551,0-1,.448-1,1v13h20v-9.76Zm-10,1.76c-4,0-5,6-5,6h5c1.657,0,3-1.343,3-3s-1.343-3-3-3Zm2.619-1.24l5.738-6.449c.348-.389.946-.422,1.334-.074.013.012.025.023.038.036.369.368.369.965.001,1.334,0,0,0,0-.001.001l-6.042,6.043c.465.511.817,1.118,1.039,1.788l6.413-6.413c1.148-1.15,1.148-3.013,0-4.163-1.149-1.15-3.012-1.151-4.162-.002-.039.039-.077.079-.114.12l-6.298,7.076c.747.086,1.443.325,2.054.703Z"/>
</svg>

);
