import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,8v1c0,.552-.448,1-1,1s-1-.448-1-1v-1c0-.552,.448-1,1-1s1,.448,1,1Zm19.707,15.707c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098,.684,.293,.293S1.316-.098,1.707,.293l2.546,2.546c.813-.537,1.761-.839,2.747-.839h10c2.757,0,5,2.243,5,5v2c0,.552-.448,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3h-4v7.586l10.707,10.707c.391,.391,.391,1.023,0,1.414ZM5.716,4.302l5.284,5.284V4H7c-.45,0-.885,.112-1.284,.302Zm6.284,11.698c-.552,0-1,.448-1,1v4c0,.552,.448,1,1,1s1-.448,1-1v-4c0-.552-.448-1-1-1Z"/></svg>

);
