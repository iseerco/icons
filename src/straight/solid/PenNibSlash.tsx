import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenNibSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.21,2.79l2.79-2.79,8,8-2.79,2.79L13.21,2.79Zm7.15,9.98L11.23,3.64l-4.52,1.65L1.46,.04,.04,1.46,22.54,23.96l1.41-1.41-5.25-5.25,1.65-4.52Zm-11.36,4.23c-.18,0-.35-.03-.51-.07L1.42,24l14.6-3.74-5.04-5.04c-.11,1-.95,1.78-1.98,1.78Zm-1.93-1.49c-.04-.16-.07-.33-.07-.51,0-1.03,.78-1.87,1.78-1.98L3.74,7.98,0,22.58l7.07-7.07Z"/></svg>

);
