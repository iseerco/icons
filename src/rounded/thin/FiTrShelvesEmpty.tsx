import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrShelvesEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,0c-.276,0-.5.224-.5.5v7.5H1V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v23c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h22v2.5c0,.276.224.5.5.5s.5-.224.5-.5V.5c0-.276-.224-.5-.5-.5ZM1,20v-11h22v11H1Z"/>
</svg>

);
