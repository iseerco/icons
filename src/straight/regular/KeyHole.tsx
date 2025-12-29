import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyHole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,7C19,3.14,15.859,0,12,0S5,3.14,5,7c0,2.093,.933,4.059,2.525,5.383l-2.516,11.617h13.98l-2.516-11.617c1.593-1.324,2.525-3.29,2.525-5.383Zm-2.488,15H7.488l2.27-10.479c-1.634-.936-2.784-2.603-2.758-4.521,0-2.757,2.243-5,5-5s5,2.243,5,5c.026,1.918-1.124,3.585-2.758,4.521l2.27,10.479Z"/>
</svg>

);
