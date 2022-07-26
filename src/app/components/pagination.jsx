import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
	const { itemsCount, pageSize } = props;
	const pageCount = Math.ceil(itemsCount / pageSize);
	if (pageCount === 1) return null;
	const pages = _.range(1, pageCount + 1);
	console.log(pages);
	return (
		<ul className='pagination'>
			{pages.map((page) => (
				<li className='page-item' key={'page_' + page}>
					<a href='#' className='page-link'>
						{page}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
