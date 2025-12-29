import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShieldCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.679,2.555L12,0l-7.678,2.555c-1.389.462-2.322,1.757-2.322,3.223v6.185c0,6.542,6.852,10.489,8.952,11.543l.984.494,1.021-.412c2.122-.857,9.043-4.226,9.043-11.624v-6.185c0-1.466-.933-2.762-2.321-3.223Zm-.679,9.408c0,5.279-5.032,7.925-6.932,8.734-1.926-1.002-7.068-4.113-7.068-8.734v-6.185c0-.166.106-.312.266-.365l6.734-2.242,6.735,2.242c.161.053.265.197.265.365v6.185Z"/>
  <polygon points="13.5 5 10.5 5 10.5 8 7 8 7 11 10.5 11 10.5 18 13.5 18 13.5 11 17 11 17 8 13.5 8 13.5 5"/>
</svg>

);
