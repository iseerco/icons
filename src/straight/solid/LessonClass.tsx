import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LessonClass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm13,3.5H3c-1.654,0-3,1.346-3,3v8h2v7h2v-7h2v7h2V8h7v-2ZM21,0H7.599c.555.687.901,1.549.901,2.5,0,.531-.109,1.036-.297,1.5h8.797v6h-7v5h8v-2h4v2h2V3c0-1.657-1.343-3-3-3Z"/>
</svg>

);
