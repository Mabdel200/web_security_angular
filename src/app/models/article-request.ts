import {MarqueRequest} from "./marque-request";
import {CategorieRequest} from "./categorie-request";

export interface ArticleRequest {
  name?: string;
  description?: string;
  prix?: string;
  quantiteStock?: string;
  // imageUrl?: string;
  color?: string;
  marque?: MarqueRequest;
  categorie?: CategorieRequest;


}
