import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

class ToDoList extends React.Component {
	filteredItems = () => {
		const filtered = [];

		for (const uuid in this.props.items) {
			const item = this.props.items[uuid];

			if (
				this.props.filter === 'all' ||
				(this.props.filter === 'done' && item.done === true) ||
				(this.props.filter === 'undone' && item.done === false)
			) {
				filtered.push(item);
			}
		}

		return filtered;
	};

	render() {
		return (
			<div className="todo-list">
				<table className="todo-items table table-borderless">
					<tbody>
						{this.filteredItems().map(item => (
							<ToDoItem key={`todo-item-${item.uuid}`} data={item} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(state => ({
	filter: state.filter,
	items: state.toDoItems
}))(ToDoList);
