import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FeedbackReview = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,14v2l-1.5,8h-9.5v-8h-2v8h-1c-1.105,0-2-.895-2-2v-6c0-1.105.895-2,2-2h3.026l2.193-4.149c.18-.352.428-.614.682-.719.212-.088.427-.132.64-.132.682,0,1.244.446,1.432,1.136.022.08.05.265-.007.599l-.58,3.265h6.613Zm-7.989-7.762l2.173,1.68.504-.349-.884-2.686,2.197-1.273v-.611h-2.883l-.784-3h-.648l-.784,3h-2.899v.615l2.212,1.231-.869,2.717.48.362,2.183-1.687Zm-8.001,3l2.173,1.68.504-.349-.884-2.686,2.197-1.273v-.611h-2.883l-.784-3h-.648l-.784,3H.003v.615l2.212,1.231-.869,2.717.48.362,2.183-1.687Zm16,0l2.173,1.68.504-.349-.884-2.686,2.197-1.273v-.611h-2.883l-.784-3h-.648l-.784,3h-2.899v.615l2.212,1.231-.869,2.717.48.362,2.183-1.687Z"/>
</svg>

);
