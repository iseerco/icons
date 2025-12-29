import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramNext = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H4C1.79,0,0,1.79,0,4v2c0,2.21,1.79,4,4,4h7v4h-1.45c-.69,0-1.04,.83-.55,1.32l2.45,2.45c.3,.3,.79,.3,1.1,0l2.45-2.45c.49-.49,.14-1.32-.55-1.32h-1.45v-4h7c2.21,0,4-1.79,4-4v-2c0-2.21-1.79-4-4-4Zm1.68,2.91l-5.09,5.09h-3.17l6-6h.59c.7,0,1.32,.36,1.68,.91ZM7.41,8L13.41,2h3.17l-6,6h-3.17ZM4,2h.59l-2.59,2.59v-.59c0-1.1,.9-2,2-2Zm-1.68,5.09L7.41,2h3.17l-6,6h-.59c-.7,0-1.32-.36-1.68-.91Zm17.68,.91h-.59l2.59-2.59v.59c0,1.1-.9,2-2,2Zm4,10v2c0,2.21-1.79,4-4,4H4c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h2.89c-.28,.97-.02,2.01,.7,2.74l2.45,2.45c.54,.54,1.25,.81,1.96,.81s1.42-.27,1.96-.81l2.45-2.45c.72-.72,.99-1.77,.7-2.74h2.89c2.21,0,4,1.79,4,4Z"/></svg>

);
