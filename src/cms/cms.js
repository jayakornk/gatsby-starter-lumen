import CMS from 'netlify-cms';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';

import './assets/fonts/Jost/jost.css';
import './assets/css/styles.css';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
