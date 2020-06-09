export enum TaxonomyTypes {
  countries = 'Paises',
  categories = 'Categorias',
  languages = 'Idiomas'
};

export function getTaxonomyTypes(key = 'Countries'): TaxonomyTypes {
  return <TaxonomyTypes>TaxonomyTypes[key];
}