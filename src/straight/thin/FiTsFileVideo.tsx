import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.707,0H4.5c-1.378,0-2.5,1.122-2.5,2.5V24H22V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827,.673-1.5,1.5-1.5H14v7h7v15H3ZM15,12H6v8H15v-1.75l3,2.25V11.5l-3,2.25v-1.75Zm-1,7H7v-6h7v6Zm3-5.5v5l-2-1.5v-2l2-1.5Z"/></svg>

);
