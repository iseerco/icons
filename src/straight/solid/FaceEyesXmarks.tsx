import React from 'react';
import type { IconProps } from '../../types';

export const FaceEyesXmarks: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0ZM5.018,11.793l1.568-1.568-1.568-1.568,1.414-1.414,1.568,1.568,1.568-1.568,1.414,1.414-1.568,1.568,1.568,1.568-1.414,1.414-1.568-1.568-1.568,1.568-1.414-1.414Zm3.982,6.207c0-1.657,1.343-3,3-3s3,1.343,3,3h-6Zm9.982-6.207l-1.414,1.414-1.568-1.568-1.568,1.568-1.414-1.414,1.568-1.568-1.568-1.568,1.414-1.414,1.568,1.568,1.568-1.568,1.414,1.414-1.568,1.568,1.568,1.568Z"/></svg>
);

FaceEyesXmarks.displayName = 'FaceEyesXmarks';
