import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,13.276V5c0-2.757-2.243-5-5-5h-4c-2.757,0-5,2.243-5,5V13.276c-1.742,.621-3,2.271-3,4.224v5.5c0,.553,.448,1,1,1s1-.447,1-1v-4H20v4c0,.553,.448,1,1,1s1-.447,1-1v-5.5c0-1.953-1.258-3.602-3-4.224Zm-2-8.276V13h-2V2.184c1.161,.414,2,1.514,2,2.816Zm-6,8V2h2V13h-2ZM9,2.184V13h-2V5c0-1.302,.839-2.402,2-2.816Z"/></svg>

);
