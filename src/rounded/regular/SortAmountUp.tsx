import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortAmountUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23c0,.553-.448,1-1,1H10c-.552,0-1-.447-1-1s.448-1,1-1h13c.552,0,1,.447,1,1Zm-15-5c0,.553,.448,1,1,1h10c.552,0,1-.447,1-1s-.448-1-1-1H10c-.552,0-1,.447-1,1Zm0-5c0,.553,.448,1,1,1h7c.552,0,1-.447,1-1s-.448-1-1-1h-7c-.552,0-1,.447-1,1Zm0-5c0,.553,.448,1,1,1h4c.552,0,1-.447,1-1s-.448-1-1-1h-4c-.552,0-1,.447-1,1Zm.121-4.707L6.413,.584c-.779-.777-2.047-.778-2.828,0L.878,3.293c-.391,.391-.391,1.023,0,1.414s1.024,.391,1.414,0l1.708-1.708V23c0,.553,.448,1,1,1s1-.447,1-1V2.999l1.707,1.708c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293c.391-.391,.391-1.023,0-1.414Z"/></svg>

);
