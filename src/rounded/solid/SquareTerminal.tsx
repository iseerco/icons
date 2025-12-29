import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareTerminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM10.121,14.121l-4.041,4.041c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l4.041-4.041c.39-.39,.39-1.024,0-1.414L4.667,7.252c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l4.041,4.041c1.17,1.17,1.17,3.072,0,4.242Zm8.879,3.879h-7c-.552,0-1-.447-1-1s.448-1,1-1h7c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>

);
