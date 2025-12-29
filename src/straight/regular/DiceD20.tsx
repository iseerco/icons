import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD20 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.543.428a2.994,2.994,0,0,0-3.086,0L1,6.1V17.9l9.457,5.674a2.989,2.989,0,0,0,3.086,0L23,17.9V6.1ZM8.805,11H15.2L12,16.113Zm3.246-7.849L15.3,9H8.721Zm5.182,5.21-2.822-5.08,5.645,3.387ZM6.781,8.37l-2.837-1.7L9.722,3.2ZM5.738,10.076,3,14.091V8.434Zm1.224,1.75L10.007,16.7l-5.989-.552Zm10.087-.018,3.027,4.336L14,16.683Zm1.221-1.736L21,8.434v5.543ZM5.552,18.3,11,18.8v2.767ZM13,21.566V18.779l5.449-.483Z"/></svg>

);
