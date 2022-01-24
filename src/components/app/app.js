import { Component } from 'react'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-from/employers-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:"Jhon" , salary: 1900, increase: true, rise: true, id: 1}, 
                {name:"Lexa" , salary: 800, increase: false, rise: false, id: 2}, 
                {name:"Yulia" , salary: 1200, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all',
            active: 'all'
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index); // Берем часть с первого элемента до нашего (index не входит)
            // const after = data.slice(index+1);


            // const newArr = [...before, ...after];


            return {
                data: data.filter( elem => elem.id !==id)
            }
        })
    }

    addItem = (name,salary) => {

        let add = true;
        let lengthData = this.state.data.length

        const newElem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data})=> {
            const newArr = data.slice();
            for (let value of Object.values(newElem)) {
                if(value === '') {
                    add = false;
                } 
            }


            if(add) {
                newArr.push(newElem);

            } else {
                if(lengthData === 3) {
                    this.maxId = lengthData + 1;
                } else {
                    this.maxId = lengthData + 1
                }

                return {
                    data: data
                }
            }

            return {
                data: newArr
            }
        });


   }

   onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);


        //     const old = data[index]; // Старый объект из массива (стейта)
        //     const newItem = {...old, increase: !old.increase}; // берем старый и меняем в нем свойство, тем самым заменим его

        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // берем часть до старого объекта , потом наш новый объект вместо старого, потом хвостик


        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
        
   }

   searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            // let name = item.name.toLowerCase();
            return item.name.indexOf(term) > -1
        })
   }

   onFilter = (items, filter) => {
        switch(filter) {
            case 'rise':
              return  items.filter(item => item.rise);
                
            case 'money':
              return  items.filter(item => item.salary > 1000)
                
            case 'all':
                return items;

        }
   }


   onUpdateSearch = (term) => {
        this.setState({term});
        console.log(this.state);
   }

   onUpdateFilter = (filter, active) => {
    this.setState({filter});
    this.setState({active});
    console.log(this.state.filter);
}


    render() {
        const {data, term, filter, active} = this.state;
        const visibleData = this.onFilter(this.searchEmp(data, term), filter);


        return (
            <div className="app">
                <AppInfo
                data={this.state.data}
                numEmpl={this.state.data.length}
                onlyIncrease={this.onlyIncrease}/>
    
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    onUpdateFilter={this.onUpdateFilter}
                    filter={filter}
                    active={active}/>
    
                </div>
    
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                data={data}
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;