import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0L1.5,6v12l10.5,6,10.5-6V6L12,0Zm9.087,6.344l-9.109,5.08L3.1,6.237,12,1.152l9.087,5.192Zm-18.587.701l9,5.259v10.258l-9-5.142V7.045Zm10,15.517v-10.284l9-5.02v10.162l-9,5.142Z"/>
</svg>

);
