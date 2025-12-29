import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.207,23l-5.707-5.707V6.207l1.623-1.623c.395.262.868.416,1.377.416,1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5c0,.509.154.981.416,1.377l-4.77,4.77.707.707,2.146-2.146v10.086l-5.707,5.707H0v1h24v-1h-5.793ZM15.5,1c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm1.293,22h-4.293v-4.293l4.293,4.293Zm-5.293-4.293v4.293h-4.293l4.293-4.293Z"/>
</svg>

);
