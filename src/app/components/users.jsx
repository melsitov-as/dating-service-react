import React, { useState } from 'react';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import User from './user';
import GroupList from './groupList';
import api from '../api/fake.api/professions.api';

const Users = ({ users, ...rest }) => {
	const count = users.length;
	const pageSize = 4;
	const [currentPage, setCurrentPage] = useState(1);
	const [professions, setProfessions] = useState(api.professions.fetchAll);

	const handleProfessionSelect = (params) => {
		console.log(params);
	};

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex);
	};
	const userCrop = paginate(users, currentPage, pageSize);
	return (
		<>
			<GroupList items={professions} onItemSelect={handleProfessionSelect} />
			{count > 0 && (
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Имя</th>
							<th scope='col'>Качества</th>
							<th scope='col'>Профессия</th>
							<th scope='col'>Встретился, раз</th>
							<th scope='col'>Оценка</th>
							<th scope='col'>Избранное</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{userCrop.map((user) => (
							<User key={user._id} {...rest} {...user} />
						))}
					</tbody>
				</table>
			)}
			<Pagination
				itemsCount={count}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default Users;
