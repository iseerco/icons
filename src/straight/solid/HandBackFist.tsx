import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackFist = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.997,0c-1.103,.002-1.997,.896-1.997,2V11h-2V5.084l-3.121,3.552c-.567,.567-.879,1.32-.879,2.122s.312,1.555,.853,2.095l5.147,5.148v6h14v-6.808l1.428-3.569c.378-.945,.572-1.954,.572-2.971V2.808S9.753-.001,8.997,0Z"/></svg>

);
