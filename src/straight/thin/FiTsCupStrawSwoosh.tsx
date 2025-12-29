import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCupStrawSwoosh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,5h-9.384l.501-4h5.883V0h-6.883l-.627,5H1v1h1.556l1.864,15.793c.149,1.258,1.216,2.207,2.483,2.207h10.194c1.267,0,2.334-.949,2.483-2.207l1.864-15.793h1.556v-1Zm-4.413,16.676c-.089.755-.73,1.324-1.49,1.324H6.903c-.76,0-1.4-.569-1.49-1.324l-.715-6.053c.791-.526,2.615-1.623,4.101-1.623.955,0,1.943.463,2.988.953,1.099.515,2.234,1.047,3.413,1.047,1.52,0,3.232-.899,4.236-1.521l-.85,7.197Zm1.003-8.496c-.504.357-2.674,1.82-4.39,1.82-.955,0-1.943-.463-2.988-.953-1.099-.515-2.234-1.047-3.413-1.047-1.518,0-3.227.896-4.232,1.518l-1.006-8.518h16.875l-.848,7.18Z"/>
</svg>

);
