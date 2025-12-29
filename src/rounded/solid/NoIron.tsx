import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoIron = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.206,20.792l1.501,1.501c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098,.684,.293,.293S1.316-.098,1.707,.293L10.417,9.003c.014,0,.027-.003,.04-.003h11.46c-.478-2.834-2.949-5-5.917-5h-7c-.553,0-1-.447-1-1s.447-1,1-1h7c4.411,0,8,3.589,8,8v7c0,1.53-.705,2.881-1.794,3.792ZM.081,17.878c-.076,.45-.308,1.823,.617,2.916,.676,.801,1.772,1.206,3.259,1.206h13.821L5.839,10.06C2.849,11.516,.643,14.359,.081,17.878Z"/>
</svg>

);
