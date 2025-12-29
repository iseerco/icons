import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Right = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,22.03c-.39,0-.78-.08-1.16-.23-1.13-.47-1.84-1.52-1.85-2.75v-2.06H3.97c-2.19,0-3.97-1.8-3.97-4.01v-1.98c0-2.21,1.78-4.01,3.97-4.01h7.03v-2.06c0-1.23,.71-2.28,1.85-2.75,1.13-.47,2.38-.22,3.24,.65l6.72,6.33,.02,.02c1.55,1.55,1.55,4.07,0,5.62l-6.77,6.37c-.56,.56-1.3,.86-2.06,.86Z"/></svg>

);
