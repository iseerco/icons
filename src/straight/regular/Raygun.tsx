import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Raygun = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,8V3h-2v5h-2V1h-1c-1.348,0-3.887.371-6.499,1.143C6.161.455,3.734,0,0,0c0,0,2.215,1.792,2.475,4.922C.989,6.031,0,7.386,0,9c0,1.705,1.104,3.122,2.732,4.264L.041,22.371l-.041,1.629h7.01l2.116-7.965c2.385.651,4.634.965,5.873.965h1v-7h2v5h2v-5c2.414,1.185,4,3,4,3V5s-1.586,1.815-4,3Zm-14.528,14h-3.236l2.271-7.686c.854.43,1.773.806,2.708,1.131l-1.742,6.556Zm8.528-7.056c-3.889-.381-12-2.684-12-5.944S10.111,3.437,14,3.056v11.889Z"/></svg>

);
