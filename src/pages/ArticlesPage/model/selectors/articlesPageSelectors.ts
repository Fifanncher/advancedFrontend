import {StateSchema} from 'app/providers/StoreProvider';
import {ArticleView} from 'entities/Article';

const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;

export {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageView
};
