import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.02,23.01l4.94-4.98L.77,7.84,7.84,.77l10.2,10.2,4.97-4.92v13.96c0,.8-.32,1.56-.88,2.12-.57,.57-1.32,.88-2.12,.88H6.02Z"/></svg>

);
