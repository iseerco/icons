import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Qrcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,0V11H11V0H0ZM7,7h-3v-3h3v3ZM13,0V11h11V0H13Zm7,7h-3v-3h3v3ZM0,13v11H11V13H0Zm7,7h-3v-3h3v3Zm10-3h-4v-4h4v4Zm3,3h-3v-3h3v3Zm-3,4h-4v-4h4v4Zm7-7h-4v-4h4v4Z"/></svg>

);
