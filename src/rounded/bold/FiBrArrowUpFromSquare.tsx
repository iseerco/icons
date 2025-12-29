import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowUpFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.417,7.538c-.573-.598-.553-1.548,.045-2.121L9.548,1.503c.638-.639,1.517-1.003,2.452-1.003s1.814,.364,2.475,1.025l4.062,3.892c.598,.573,.619,1.522,.045,2.121-.294,.308-.688,.462-1.083,.462-.374,0-.747-.138-1.038-.417l-2.962-2.838V15.5c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5V4.745l-2.962,2.838c-.598,.573-1.548,.553-2.121-.045Zm15.083,1.462c-.829,0-1.5,.671-1.5,1.5v8c0,1.378-1.122,2.5-2.5,2.5H7.5c-1.378,0-2.5-1.122-2.5-2.5V10.5c0-.829-.671-1.5-1.5-1.5s-1.5,.671-1.5,1.5v8c0,3.033,2.467,5.5,5.5,5.5h9c3.033,0,5.5-2.467,5.5-5.5V10.5c0-.829-.671-1.5-1.5-1.5Z"/></svg>

);
