import classNames from 'classnames';
import { Filter } from '../types/Filter';
import { Todo } from '../types/Todo';

type Props = {
  activeTodos: Todo[],
  filterBy: Filter,
  selectFilterField: (filter: Filter) => void
};

export const Footer: React.FC<Props> = (
  { activeTodos, filterBy, selectFilterField },
) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${activeTodos.length} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={classNames('filter__link', {
            selected: filterBy === Filter.ALL,
          })}
          onClick={() => selectFilterField(Filter.ALL)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={classNames('filter__link', {
            selected: filterBy === Filter.ACTIVE,
          })}
          onClick={() => selectFilterField(Filter.ACTIVE)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={classNames('filter__link', {
            selected: filterBy === Filter.COMPLETED,
          })}
          onClick={() => selectFilterField(Filter.COMPLETED)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
};