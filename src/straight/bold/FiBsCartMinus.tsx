import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCartMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,22c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm8-2c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM15,3v3h9V3H15Zm3.09,12H7.41c-.25,0-.46-.19-.5-.43l-.88-6.57h5.97v-3H5.63l-.26-1.96c-.23-1.73-1.72-3.04-3.47-3.04H0V3H1.9c.25,0,.46,.19,.5,.43l1.54,11.53c.23,1.73,1.72,3.04,3.47,3.04h12.97l2.49-9h-3.11l-1.66,6Z"/></svg>

);
