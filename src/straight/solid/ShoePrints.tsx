import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShoePrints = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.605,13.947c-.789-1.579-1.605-3.211-1.605-4.947,0-4.81,2.592-7,5-7,1.669,0,6,1.617,6,9,0,1.623-.27,2.701-.53,3.743-.178,.712-.347,1.397-.424,2.257h-7.172c-.228-.971-.737-1.99-1.268-3.053Zm1.395,5.053v1.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-1.5h-7ZM.955,15h7.172c.228-.971,.737-1.99,1.268-3.053,.789-1.579,1.605-3.211,1.605-4.947C11,2.19,8.408,0,6,0,4.331,0,0,1.617,0,9c0,1.623,.27,2.701,.53,3.743,.178,.712,.347,1.397,.424,2.257Zm.045,2v1.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-1.5H1Z"/></svg>

);
