// this is the definition of a "blank cluster" for Rancher Dashboard
// definition of a "blank cluster" in Rancher Dashboard
const BLANK_CLUSTER = '_';

export function init($plugin: any, store: any) {
  const YOUR_PRODUCT_NAME = 'JAK';


  const {
    product,
    virtualType,
    basicType
  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

  // registering a top-level product
  product({
    icon: 'gear',
    inStore: 'management',
    weight: 100,
    to: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster-Page-1`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  // creating a custom page
  virtualType({
    labelKey: 'some.translation.key',
    name: "Page-1",
    route: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster-Page-1`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  // creating yet another custom page
  virtualType({
    labelKey: 'some.translation.key',
    name: "Page-2",
    route: {
      name: `${YOUR_PRODUCT_NAME}-c-cluster-Page-2`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });
  
  // registering the defined pages as side-menu entries
  basicType(["Page-1", "Page-2"]);
}
