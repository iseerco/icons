import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxFragile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,10c0,2.414-1.721,4.429-4,4.895v3.105h2c.552,0,1,.448,1,1s-.448,1-1,1h-6c-.552,0-1-.448-1-1s.448-1,1-1h2v-3.125c-2.333-.488-4-2.662-4-5.098v-3.777c0-1.105,.895-2,2-2h1.783s-1.689,2.838-1.713,2.917c-.147,.487-.055,1.021,.249,1.43s.788,.653,1.297,.653h2.068l-1.533,2.473c-.291,.469-.146,1.086,.323,1.377,.164,.102,.346,.15,.526,.15,.334,0,.662-.168,.851-.473l1.881-3.037c.327-.493,.357-1.123,.077-1.645s-.821-.846-1.413-.846h-2.079l1.798-3h1.885c1.105,0,2,.895,2,2v4Z"/></svg>

);
