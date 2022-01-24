import './app-filter.css';

const AppFilter = (props)=> {

   const arrBtns = [
        {name: "all", label: 'Все сотрудники'},
        {name: "rise", label: 'На повышение'},
        {name: "money", label: 'ЗП больше 1000$'},
        
    ]

   const buttons = arrBtns.map(({name,label})=> {
        const activeClazz = name === props.filter;
        console.log(activeClazz)
        const clazz = activeClazz ? "btn btn-light" :  "btn btn-outline-light";
        return (
            <button 
            className={clazz}
            data-filter={name}
            key={name}
            type="button"
            onClick={(e)=> props.onUpdateFilter(e.currentTarget.getAttribute('data-filter'), e.currentTarget.getAttribute('data-filter'))}>
                {label}
        </button>
        )
    });
    
    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
};

export default AppFilter;