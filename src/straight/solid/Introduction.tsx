import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Introduction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,13c2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4,1.794,4,4,4Zm7,6v5H4v-7H0V5h2v10h9c2.206,0,4,1.794,4,4ZM24,2v6l-5.962.004-2.822,2.37c-.526.336-1.215-.041-1.215-.665l-.002-7.707c0-1.104.895-2,1.999-2L21.999,0c1.105,0,2.001.895,2.001,2Z"/>
</svg>

);
