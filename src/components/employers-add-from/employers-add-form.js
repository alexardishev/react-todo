import { Component } from 'react';
// import './employers-add-form.css';
import './employers-add-form.scss';


class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onValueChange = (e) => {
        this.setState({
            
            [e.target.name]: e.target.value
            
        })
        console.log(e.target.name)
    }



    render() {

        const {name, salary} = this.state;
        const {onAdd} = this.props;


        return (
            <div className="app-add-form">
                    <h3>Добавьте нового сотрудника</h3>
                    <form
                        className="add-form d-flex">
                        <input type="text"
                            className="form-control new-post-label"
                            placeholder="Как его зовут?" 
                            name='name'
                            value={name}
                            onChange={this.onValueChange}/>
                        <input type="number"
                            className="form-control new-post-label"
                            placeholder="З/П в $?" 
                            name='salary'
                            value={salary}
                            onChange={this.onValueChange}/>
    
                        <button type="submit"
                                className="btn btn-outline-light"
                                onClick={(e)=> {
                                    e.preventDefault();
                                    onAdd(name,salary)
                                }
                            }
                                >Добавить</button>
                    </form>
            </div>
        )
    }
  
}

export default EmployersAddForm;