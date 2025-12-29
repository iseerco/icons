import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTreasureChest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5C2.468,0,0,2.467,0,5.5V24H24V5.5c0-3.033-2.468-5.5-5.5-5.5Zm4.5,5.5v3.5h-3V1.276c1.742,.621,3,2.271,3,4.224ZM18.5,1c.171,0,.334,.032,.5,.051v7.949h-4c0-1.654-1.346-3-3-3s-3,1.346-3,3H5V1.051c.166-.019,.329-.051,.5-.051h13Zm-4.5,8v4h-4v-4c0-1.103,.897-2,2-2s2,.897,2,2ZM4,1.276v7.724H1v-3.5c0-1.953,1.258-3.602,3-4.224ZM20,23V12h-1v11H5V12h-1v11H1V10H9v4h6v-4h8v13h-3Z"/></svg>

);
