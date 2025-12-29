import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OldPeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M10,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm10,11.5v9c0,.552-.448,1-1,1s-1-.448-1-1V14.599c-1.368-.779-2.816-1.941-4.017-3.196-.063,1.363-.041,3.026-.015,4.879l.021,1.681c.032,1.251-.806,2.451-1.988,2.851v2.187c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2.188c-1.214-.409-2.054-1.659-1.981-2.944,.307-7.653,2.608-11.868,6.481-11.868,1.731-.108,2.957,1.407,3.808,2.709,1.264,1.707,3.377,3.515,5.14,4.396,.339,.169,.553,.516,.553,.895Z"/>
</svg>

);
