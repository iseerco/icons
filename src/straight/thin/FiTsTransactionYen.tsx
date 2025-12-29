import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTransactionYen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24.026,3.5c0,.357-.139,.692-.392,.945l-2.543,2.544-.707-.707,2.281-2.282H12c-4.411,0-8,3.589-8,8,0,2.39,1.059,4.533,2.726,6h-1.415c-1.432-1.594-2.311-3.694-2.311-6C3,7.038,7.038,3,12,3h10.666l-2.281-2.282L21.091,.011l2.543,2.544c.252,.252,.392,.588,.392,.945Zm-6.753,2.5c1.667,1.467,2.726,3.61,2.726,6,0,4.411-3.589,8-8,8H1.334l2.288-2.288-.707-.707L.366,19.554c-.522,.521-.522,1.371,0,1.893l2.549,2.549,.707-.707-2.288-2.288H12c4.962,0,9-4.037,9-9,0-2.306-.879-4.406-2.311-6h-1.415Zm-2.159,1.439l-3.114,3.775-3.114-3.775-.771,.637,3.238,3.924h-1.852v1h2v1h-2v1h2v2h1v-2h2v-1h-2v-1h2v-1h-1.852l3.238-3.924-.771-.637Z"/>
</svg>

);
