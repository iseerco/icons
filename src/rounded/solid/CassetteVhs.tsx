import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CassetteVhs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.42,6c.77-1.76,2.53-3,4.58-3h14c2.05,0,3.81,1.24,4.58,3H.42Zm15.58,5.99v4.01h1.48s0,0,0,0c.23-.4,.52-1.09,.52-2s-.29-1.6-.53-2.01h-1.47Zm-8,.01h-1.48c-.24,.41-.52,1.09-.52,2s.29,1.6,.53,2.01h1.47v-4.01Zm2,4.01h4v-4.02h-4v4.02Zm14-8.01v8c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V8H24Zm-4,6c0-1.35-.44-2.39-.8-3.02-.35-.61-1.01-.98-1.72-.98H6.52c-.71,0-1.37,.38-1.72,.98-.37,.63-.8,1.66-.8,3.02s.44,2.39,.8,3.02c.35,.61,1.01,.98,1.72,.98h10.95c.71,0,1.37-.38,1.72-.98,.37-.63,.8-1.66,.8-3.02Z"/></svg>

);
