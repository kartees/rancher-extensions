import JakPage1 from '../pages/jak-page-1.vue';
import JakPage2 from '../pages/jak-page-2.vue';
const BLANK_CLUSTER = '_';
// to achieve naming consistency throughout the extension
// we recommend this to be defined on a config file and exported
// so that the developer can import it wherever it needs to be used
const YOUR_PRODUCT_NAME = 'JAK';

const routes = [
  // this covers the "custom page"
  {
    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-Page-1`,
    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/Page-1`,
    component: JakPage1,
    meta:      {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER
    },
  },
  {
    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-Page-2`,
    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/Page-2`,
    component: JakPage2,
    meta:      {
      product: YOUR_PRODUCT_NAME,
      cluster: BLANK_CLUSTER
    },
  }
];

export default routes;
