import dispatcher from '../store/dispatcher';

export function filterBugsBySearch(searchParameters) {
    
    dispatcher.dispatch({
        type: "FILTER_SEARCH",
        searchParameters,
    });
}

export function sortBugs(sortType, sortOrder){
	dispatcher.dispatch({
		type: "SORT_BUGS",
		sortType, sortOrder,
	});
}