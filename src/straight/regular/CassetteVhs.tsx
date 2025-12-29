import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CassetteVhs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H3c-1.65,0-3,1.35-3,3v15H24V6c0-1.65-1.35-3-3-3ZM2,19V7H22v12H2ZM18.45,9H5.55l-.3,.34c-.05,.06-1.25,1.43-1.25,3.66s1.2,3.61,1.25,3.66l.3,.34h12.9l.3-.34c.05-.06,1.25-1.43,1.25-3.66s-1.2-3.61-1.25-3.66l-.3-.34Zm-4.45,2v4h-4v-4h4Zm-8,2c0-.93,.3-1.62,.52-2h1.48v4h-1.48c-.22-.38-.52-1.07-.52-2Zm11.48,2h-1.48v-4h1.48c.22,.38,.52,1.07,.52,2s-.3,1.62-.52,2Z"/></svg>

);
