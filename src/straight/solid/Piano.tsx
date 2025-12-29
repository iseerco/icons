import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Piano = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m-.048,15v-6.352C-.048,3.879,3.847,0,8.633,0c4.004,0,7.403,2.72,8.268,6.614l.231,1.042c.238,1.072,1.177,1.821,2.282,1.821,2.555,0,4.634,2.072,4.634,4.618v.905H-.048Zm19.048,2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3H-.048v7h24.096v-7h-5.048Z"/>
</svg>

);
