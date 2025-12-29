import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.501,21h-.454S15.159,2.249,15.159,2.249C14.667.91,13.427.045,12,.045s-2.667.865-3.159,2.204L1.957,20.988h-.533s0,0,0,0c-.828,0-1.499.671-1.5,1.499s.671,1.5,1.499,1.501l21.077.013h0c.828,0,1.499-.671,1.5-1.499s-.671-1.5-1.499-1.501Zm-14.045-9h7.089l1.102,3H7.353l1.102-3Zm3.202-8.716c.115-.318.57-.318.686,0l2.1,5.716h-4.885l2.1-5.716Zm-5.406,14.716h11.497l1.101,2.998-13.697-.008,1.098-2.99Z"/>
</svg>

);
