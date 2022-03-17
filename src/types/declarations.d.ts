// declaration.d.ts
declare module "*.scss";
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.webp" {
  const content: any;
  export default content;
}

declare module "simple-react-lightbox";
