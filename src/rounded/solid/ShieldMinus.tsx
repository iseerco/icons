import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.574,2.126L12.315.051c-.205-.068-.425-.068-.63,0l-6.259,2.075c-2.049.68-3.426,2.587-3.426,4.746v5.171c0,6.562,7.005,10.576,9.153,11.65,0,0,.352.307.85.307s.791-.24.791-.24c2.16-.868,9.207-4.28,9.207-11.717v-5.171c0-2.159-1.377-4.066-3.426-4.746Zm-3.574,10.874h-6c-.552,0-1-.447-1-1s.448-1,1-1h6c.552,0,1,.447,1,1s-.448,1-1,1Z"/>
</svg>

);
