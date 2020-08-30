export const TABS = {
  URL: 'URL' as 'URL',
  FILE: 'FILE' as 'FILE',
};
export const METAS = {
  title: 'title' as 'title',
  tag1: 'tag1' as 'tag1',
  tag2: 'tag2' as 'tag2',
};
export const STEPS = {
  CHOOSE_SOURCE: 'CHOOSE_SOURCE' as 'CHOOSE_SOURCE',
  CROP_IMAGE: 'CROP_IMAGE' as 'CROP_IMAGE',
  EDIT_METADATA: 'EDIT_METADATA' as 'EDIT_METADATA',
  COMPLETE_UPLOAD: 'COMPLETE_UPLOAD' as 'COMPLETE_UPLOAD',
};

export const ACCEPT_FORMATS = {
  JPG: 'image/jpg' as 'image/jpg',
  JPEG: 'image/jpeg' as 'image/jpeg',
  PNG: 'image/png' as 'image/png',
  GIF: 'image/gif' as 'image/gif',
  BMP: 'image/bmip' as 'image/bmp',
};

export type ImageForamt = typeof ACCEPT_FORMATS[keyof typeof ACCEPT_FORMATS];
