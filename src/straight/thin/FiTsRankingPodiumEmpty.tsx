import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRankingPodiumEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,11h-4c-.366,0-.705.106-1,.278v-6.278c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v4.278c-.295-.172-.634-.278-1-.278H2c-1.103,0-2,.897-2,2v10h24v-8c0-1.103-.897-2-2-2Zm-21,0c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v9H1v-9Zm7-6c0-.552.448-1,1-1h6c.552,0,1,.448,1,1v15h-8V5Zm15,15h-6v-7c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v7Z"/>
</svg>

);
