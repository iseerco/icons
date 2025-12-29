import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEraser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.975,12.632c.661-.661,1.025-1.54,1.025-2.475s-.364-1.814-1.025-2.475l-5.656-5.657c-1.364-1.364-3.584-1.366-4.95,0L1.055,13.339c-1.365,1.365-1.365,3.585,0,4.95l4.712,4.711h18.233v-3h-8.394l7.368-7.368ZM14.489,4.146c.194-.194.512-.196.708,0l5.656,5.657c.128.127.146.276.146.353,0,.078-.02.227-.146.354l-4.861,4.861-6.364-6.364,4.861-4.861Zm-7.48,15.854l-3.833-3.833c-.195-.195-.195-.512,0-.708l4.332-4.332,6.364,6.364-2.507,2.507h-4.355Z"/></svg>

);
