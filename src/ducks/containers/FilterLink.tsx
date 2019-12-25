import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from '../components/Link';
import { RootState } from '../modules';
import { actions } from '../modules/visibilityFilter';
import { VisibilityFilters } from '../../types';

export interface Props {
  filter: VisibilityFilters,
  children: React.ReactNode,
}

export const FilterLink: React.FC<Props> = ({ filter, children }) => {
  const active = useSelector<RootState, boolean>(state => state.visibilityFilter === filter);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(actions.setVisibilityFilter(filter)), [filter, dispatch]);

  return (
    <Link active={active} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default FilterLink