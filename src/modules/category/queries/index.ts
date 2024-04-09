export * from './getCaregoryById';
export * from './listCategories';

import { GetCaregoryHandler } from './getCaregoryById';
import { ListCategoriesHandler } from './listCategories';

export const QueryHandlers = [GetCaregoryHandler, ListCategoriesHandler];
