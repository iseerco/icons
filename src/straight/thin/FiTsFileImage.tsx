import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,10c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm16-2.707v16.707H2V2.5c0-1.378,1.122-2.5,2.5-2.5h10.207l7.293,7.293Zm-7-.293h5.293L15,1.707v5.293ZM3,2.5v19.293l7.5-7.5,4,4,6.5-6.5v-3.793h-7V1H4.5c-.827,0-1.5.673-1.5,1.5Zm18,20.5v-9.793l-6.5,6.5-4-4-7.293,7.293h17.793Z"/></svg>

);
