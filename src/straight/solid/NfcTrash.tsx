import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NfcTrash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12h-3v-1c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v1h-3v2h1v7c0,1.65,1.35,3,3,3h4c1.65,0,3-1.35,3-3v-7h1v-2Zm-7-1h2v1h-2v-1ZM22,3v5.37c-.73-.83-1.8-1.37-3-1.37V3h-7.41l-3.59,3.59v7.41h3v3H5V6.09l3.23-3.09H3V19H11v2c0,.34,.04,.68,.1,1H0V3C0,1.35,1.35,0,3,0H19c1.65,0,3,1.35,3,3Zm-9.59,2h4.59v2c-1.86,0-3.43,1.28-3.87,3h-3.13v-2.59l2.41-2.41Z"/></svg>

);
