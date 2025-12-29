import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GreaterThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,24H4c-.553,0-1-.447-1-1s.447-1,1-1h16c.553,0,1,.447,1,1s-.447,1-1,1Zm-15.605-5.081l14.58-6.262c1.249-.537,2.025-1.746,2.025-3.157s-.776-2.62-2.025-3.157L4.395.081c-.508-.218-1.095.017-1.313.524-.218.507.017,1.095.524,1.313l14.58,6.262c.601.258.814.851.814,1.319s-.214,1.061-.814,1.319l-14.58,6.262c-.508.218-.742.806-.524,1.313.163.379.531.605.919.605.132,0,.266-.026.395-.081Z"/>
</svg>

);
