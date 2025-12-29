import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVestPatches = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,18.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm-3-3.5h3v-3h-3v3Zm8.5,0h4l-2-3-2,3Zm8.5-2.899v11.899H1V12.103c.688-.811,2-2.736,2-3.449V3.894c0-1.584,1.058-2.974,2.573-3.378C7.482,.006,9.419,0,9.5,0h5c.081,0,2.018,.006,3.927,.515,1.516,.405,2.573,1.794,2.573,3.378v4.76c0,.72,1.312,2.641,2,3.447Zm-12.5,.814L7.036,3.256c-.228,.044-.46,.096-.689,.158-.2,.054-.347,.255-.347,.48v4.76c0,1.713-1.304,3.628-2,4.53v7.816h6.5V12.915Zm1.5-4.704l1.868-5.21h-3.737l1.868,5.21Zm8,4.973c-.696-.901-2-2.817-2-4.53V3.894c0-.225-.146-.426-.348-.48-.229-.061-.461-.113-.688-.158l-3.464,9.659v8.085h6.5v-7.816Z"/></svg>

);
