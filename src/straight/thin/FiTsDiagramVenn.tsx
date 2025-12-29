import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramVenn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,4c-1.46,0-2.82,.39-4,1.07-1.18-.68-2.54-1.07-4-1.07C3.59,4,0,7.59,0,12s3.59,8,8,8c1.46,0,2.82-.39,4-1.07,1.18,.68,2.54,1.07,4,1.07,4.41,0,8-3.59,8-8s-3.59-8-8-8Zm-2.26,4h-3.48c.47-.68,1.06-1.27,1.74-1.74,.68,.47,1.27,1.06,1.74,1.74Zm-4.06,1h4.63c.34,.77,.55,1.62,.61,2.5h-5.89c.06-.89,.29-1.73,.66-2.5Zm5.24,3.5c-.06,.88-.27,1.73-.61,2.5h-4.63c-.37-.77-.6-1.61-.66-2.5h5.89Zm-1.17,3.5c-.47,.68-1.06,1.27-1.74,1.74-.68-.47-1.27-1.06-1.74-1.74h3.48Zm-5.74,3c-3.86,0-7-3.14-7-7s3.14-7,7-7c1.1,0,2.14,.25,3.06,.71-1.86,1.47-3.06,3.74-3.06,6.29s1.2,4.83,3.06,6.29c-.93,.45-1.97,.71-3.06,.71Z"/></svg>

);
