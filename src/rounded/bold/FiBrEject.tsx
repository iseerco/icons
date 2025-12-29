import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrEject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,20.5c0,.829-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h21c.829,0,1.5.671,1.5,1.5ZM.424,14.884c-.281-.556-.424-1.145-.424-1.753,0-.815.261-1.602.754-2.274L8.931,1.519c.737-.966,1.852-1.519,3.069-1.519s2.333.552,3.069,1.519l8.178,9.339c.864,1.181.99,2.724.329,4.027-.661,1.305-1.98,2.116-3.443,2.116H3.868c-1.463,0-2.782-.811-3.444-2.116Zm2.576-1.753c0,.132.034.266.1.397.154.304.427.472.768.472h16.265c.341,0,.613-.167.767-.472.146-.289.13-.591-.044-.857L12.695,3.353c-.335-.454-1.056-.454-1.391,0L3.145,12.672c-.096.146-.145.3-.145.459Z"/></svg>

);
