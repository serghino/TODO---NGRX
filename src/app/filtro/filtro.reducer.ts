import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState,
  // using primitives values I can return the value received keeping mutability in the application state.
  on( setFiltro , (state, { filtro }) => filtro ),

);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}