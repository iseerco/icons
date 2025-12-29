import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OctagonPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.243,5.272l-3.515-3.515c-1.134-1.133-2.641-1.757-4.243-1.757h-4.971c-1.602,0-3.109.624-4.243,1.757l-3.515,3.515c-1.133,1.134-1.757,2.641-1.757,4.243v4.971c0,1.602.624,3.109,1.757,4.243l3.515,3.515c1.134,1.133,2.641,1.757,4.243,1.757h4.971c1.602,0,3.109-.624,4.243-1.757l3.515-3.515c1.133-1.134,1.757-2.641,1.757-4.243v-4.971c0-1.602-.624-3.109-1.757-4.243Zm-5.243,7.728h-4v4c0,.552-.448,1-1,1s-1-.448-1-1v-4h-4c-.552,0-1-.448-1-1s.448-1,1-1h4v-4c0-.552.448-1,1-1s1,.448,1,1v4h4c.552,0,1,.448,1,1s-.448,1-1,1Z"/>
</svg>

);
