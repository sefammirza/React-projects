export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }
        default:
            return state;
    }
}