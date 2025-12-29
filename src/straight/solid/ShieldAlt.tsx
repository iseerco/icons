import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,0v23.94c-2.1-1.062-9-5.046-9-11.565v-7.225c0-1.293.828-2.441,2.056-2.848L11,0Zm8.944,2.302L13,0v24c2.207-.905,9-4.282,9-11.625v-7.225c0-1.293-.828-2.441-2.056-2.848Z"/>
</svg>

);
