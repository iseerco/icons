import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMedicalStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.234,18.267c-.095.154-.259.239-.427.239-.09,0-.18-.023-.261-.073l-9.047-5.54v10.607c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-10.607l-9.047,5.54c-.081.05-.171.073-.261.073-.168,0-.332-.085-.427-.239-.144-.235-.07-.543.166-.688l9.111-5.579L1.932,6.421c-.236-.145-.31-.452-.166-.688.146-.237.455-.31.688-.166l9.047,5.54V.5c0-.276.224-.5.5-.5s.5.224.5.5v10.607l9.047-5.54c.233-.142.542-.07.688.166.144.235.07.543-.166.688l-9.111,5.579,9.111,5.579c.236.145.31.452.166.688Z"/></svg>

);
