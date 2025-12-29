import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11h11V12c0-6.065-4.935-11-11-11Zm-2.024,15.178l-3.825-3.825c-.195-.195-.195-.512,0-.707l3.825-3.825-.707-.707-3.825,3.825c-.585,.585-.585,1.536,0,2.121l3.825,3.825,.707-.707Zm8.585-3.118c.585-.585,.585-1.536,0-2.121l-3.825-3.825-.707,.707,3.825,3.825c.195,.195,.195,.512,0,.707l-3.825,3.825,.707,.707,3.825-3.825Z"/></svg>

);
