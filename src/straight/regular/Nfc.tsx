import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Nfc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm1,22H2V3c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1V22ZM12.09,4h7.91V20H4V4h5.41l-3.41,3.41v10.59h12V6h-5.09l-2.91,2.91v5.09h4v-4h2v6H8v-7.91l4.09-4.09Z"/></svg>

);
